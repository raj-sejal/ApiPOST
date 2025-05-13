import express from 'express';
import { createPost, deletePost } from '../controllers/postController.js';

const router = express.Router();

router.post('/', createPost);
router.delete('/:postId', deletePost);

export default router;
