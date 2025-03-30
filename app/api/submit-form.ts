import connectDB from '@/lib/mongodb';
import FormSubmission from '@/models/FormSubmission';
import { NextApiRequest, NextApiResponse } from 'next';

interface FormSubmissionData {
    fname: string;
    lname: string;
    email: string;
    message: string;
}

interface ApiResponse {
    success: boolean;
    message: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
    if (req.method === 'POST') {
        try {
            await connectDB();
            const { fname, lname, email, message } = req.body as FormSubmissionData;

            const newSubmission = new FormSubmission({ fname, lname, email, message });
            await newSubmission.save();

            res.status(201).json({ success: true, message: 'Form submitted successfully' });
        } catch (error) {
            res.status(500).json({ success: false, message: 'Server error' });
        }
    } else {
        res.status(405).json({ success: false, message: 'Method not allowed' });
    }
}
