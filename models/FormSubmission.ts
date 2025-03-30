import mongoose from 'mongoose';

const FormSubmissionSchema = new mongoose.Schema({
  fname: String,
  lname: String,
  email: String,
  message: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.FormSubmission ||
  mongoose.model('FormSubmission', FormSubmissionSchema);
