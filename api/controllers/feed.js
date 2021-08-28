const { post } = require("../routes/feed");

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
    Post.find().then(posts => {
        res.status(200).json({
            message: "Fetched posts successfully.",
            posts: posts
        })
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    })
    // res.status(200).json({
    //     posts: [
    //     {
    //         _id: "1",
    //         "title": "Dummy post",
    //         "content": "Dummy post!",
    //         "creator": {
    //             "name": "Andrea"
    //         },
    //         createdAt: new Date()
    //     }
    //     ]
    // })
}

exports.postPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    const post = new Post({
        title: title,
        content: content,
        creator: {name: 'Andrea'},
    });

    post.save().then(result => {
        console.log(result);
        res.status(201).json({
            message: 'Post created successfully!',
            post: result
        })
    }).catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        console.log(err.statusCode);
        next(err);
    })
}

exports.deletePost = (req, res, next) => {
    res.status(200).json({
        message: 'Post deleted successfully!'
    })
}

exports.editPost = (req, res, next) => {
    const postId = req.params.postId;
    const title = req.body.title;
    const content = req.body.content;

    Post.findById(postId) // mongoose built in function
    .then(post => {
        if (!post) {
            const error = new Error('Could not find post.');
            error.status = 404;
            throw error;
        }

        post.title = title;
        post.content = content;
        return post.save();
    })
    .then(result => {
        res.status(200).json({message: 'Post updated!', post: result});
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        // console.log(err.statusCode);
        next(err);
    })
}