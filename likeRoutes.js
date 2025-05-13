import express from 'express';
import {
  likePost,
  unlikePost,
  getPostLikesCount,
  isPostLikedByUser
} from '../controllers/likeController.js';

const router = express.Router();

router.post('/:postId/like', likePost);
router.delete('/:postId/unlike', unlikePost);
router.get('/:postId/likes', getPostLikesCount);
router.get('/:postId/likes/:userId', isPostLikedByUser);

export default router;

