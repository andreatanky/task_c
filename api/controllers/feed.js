const { post } = require("../routes/feed");

const Post = require('../models/post');

exports.getPosts = (req, res, next) => {
    res.status(200).json({
        posts: [
            {
                _id: "1",
                title: 'Dummy post',
                content: 'Dummy post!',
                creator: {
                    name: 'Andrea'
                },
                createdAt: new Date()
            }
        ]
    })
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

exports.putPost = (req, res, next) => {
    
}