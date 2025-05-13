import Like from '../models/Like.js';

export const likePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req.body;

    const like = new Like({ postId, userId });
    await like.save();

    res.status(201).json({ message: 'Post liked' });
  } catch (error) {
    if (error.code === 11000) {
      res.status(400).json({ error: 'User already liked this post' });
    } else {
      res.status(500).json({ error: 'Failed to like post' });
    }
  }
};

export const unlikePost = async (req, res) => {
  try {
    const { postId } = req.params;
    const { userId } = req.body;

    await Like.findOneAndDelete({ postId, userId });

    res.json({ message: 'Post unliked' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to unlike post' });
  }
};

export const getPostLikesCount = async (req, res) => {
  try {
    const { postId } = req.params;
    const count = await Like.countDocuments({ postId });
    res.json({ postId, totalLikes: count });
  } catch (error) {
    res.status(500).json({ error: 'Failed to get like count' });
  }
};

export const isPostLikedByUser = async (req, res) => {
  try {
    const { postId, userId } = req.params;
    const liked = await Like.exists({ postId, userId });
    res.json({ postId, userId, liked: !!liked });
  } catch (error) {
    res.status(500).json({ error: 'Failed to check like status' });
  }
};
