import mongoose from 'mongoose';

const likeSchema = new mongoose.Schema({
  postId: { type: mongoose.Schema.Types.ObjectId, ref: 'Post', required: true },
  userId: { type: String, required: true },
  likedAt: { type: Date, default: Date.now }
});

likeSchema.index({ postId: 1, userId: 1 }, { unique: true }); // prevent duplicate likes

export default mongoose.model('Like', likeSchema);
