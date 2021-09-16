const express = require('express');

const feedController = require('../controllers/feed');
const isAuth = require('../middleware/is-auth');

const router = express.Router();

// GET /feed/posts
router.get('/posts', isAuth, feedController.getPosts);

// POST /feed/post
router.post('/post',isAuth, feedController.postPost);

// PUT /feed/post/:postId
router.put('/post/:postId',isAuth, feedController.editPost);

// DELETE /feed/post/:postId
router.delete('/post/:postId',isAuth, feedController.deletePost);

module.exports = router;