const express = require('express');

const feedController = require('../controllers/feed');

const router = express.Router();

// GET /feed/posts
router.get('/posts', feedController.getPosts);

// POST /feed/post
router.post('/post', feedController.postPost);

// PUT /feed/post/:postId
router.put('/post/:postId', feedController.editPost);

// DELETE /feed/post/:postId
router.delete('/post/:postId', feedController.deletePost);

module.exports = router;