import connectDB from '@/lib/mongodb';
import User from '@/models/FormSubmission';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

export default async function handler(req, res) {
  await connectDB();

  if (req.method === 'POST') {
    const { name, email, password, action } = req.body;

    if (action === 'signup') {
      try {
        // Check if the user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
          return res.status(400).json({ success: false, message: 'User already exists' });
        }

        // Hash the password
        const hashedPassword = await bcrypt.hash(password, 10);

        // Create new user
        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        return res.status(201).json({ success: true, message: 'User registered successfully' });
      } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error' });
      }
    } else if (action === 'login') {
      try {
        // Check if the user exists
        const user = await User.findOne({ email });
        if (!user) {
          return res.status(400).json({ success: false, message: 'User not found' });
        }

        // Validate password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
          return res.status(400).json({ success: false, message: 'Invalid credentials' });
        }

        // Generate JWT Token
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET, { expiresIn: '7d' });

        return res.status(200).json({ success: true, message: 'Login successful', token });
      } catch (error) {
        return res.status(500).json({ success: false, message: 'Server error' });
      }
    } else {
      return res.status(400).json({ success: false, message: 'Invalid action' });
    }
  } else {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }
}
