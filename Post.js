import mongoose from 'mongoose';

const postSchema = new mongoose.Schema({
  content: { type: String, required: true },
  author: { type: String, required: true },
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model('Post', postSchema);
