import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
  fname: {type: String, required: true},
  lname: {type: String, required: true},
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.User ||
  mongoose.model('FormSubmission', UserSchema);
