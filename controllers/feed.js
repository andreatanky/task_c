const { post } = require("../routes/feed");

const Post = require('../models/post');
const User = require('../models/user');

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
}

// exports.postPost = (req, res, next) => {
//     const title = req.body.title;
//     const content = req.body.content;
//     //const name = req.body.creator.name;
//     let creator;
//     const post = new Post({
//         title: title,
//         content: content,
//         creator: req.userId,
//     });
//     console.log(post);
//     post
//         .save()
//         .then(result => {
//             return User.findById(req.userId);
//         })
//         .then(user => {
//             creator = user;
//             user.posts.push(post);
//                 return user.save();})
//         .then(result => {
//            res.status(200).json({
//                message: 'Post created successfully!',
//                post: post,
//                creator: {_id: creator._id, name: creator.name}
//            })
//         })
//         .catch(err => {
//             if (!err.statusCode) {
//                 err.statusCode = 500;
//             }
//             console.log(err.statusCode);
//             next(err);
//         })
// }

exports.postPost = (req, res, next) => {
    const title = req.body.title;
    const content = req.body.content;
    let creator;
    const post = new Post({
        title: title,
        content: content,
        creator: req.userId
    });
    post
        .save()
        .then(result => {
            return User.findById(req.userId);
        })
        .then(user => {
            creator = user;
            user.posts.push(post);
            return user.save();
        })
        .then(result => {
            res.status(201).json({
                message: 'Post created successfully!',
                post: post,
                creator: { _id: creator._id, name: creator.name }
            });
        })
        .catch(err => {
            if (!err.statusCode) {
                err.statusCode = 500;
            }
            next(err);
        });
};

exports.deletePost = (req, res, next) => {
    const postId = req.params.postId;
    Post.findById(postId)
    .then(post => {
        if (!post) {
            const error = new Error('Could not find post.');
            error.status = 404;
            throw error;
        }
        if (post.creator.toString() !== req.userId) {
            const error = new Error("Not authorized!");
            error.statusCode = 403;
            throw error;
        }
        return Post.findByIdAndRemove(postId);
    })
    .then(result => {
        res.status(200).json({message: "Post is successfully deleted."});
    })
    .catch(err => {
        if (!err.statusCode) {
            err.statusCode = 500;
        }
        console.log(err.statusCode);
        next(err);
    })
}

exports.editPost = (req, res, next) => {
    const postId = req.params.postId;
    const title = req.body.title;
    const content = req.body.content;
    //const name = req.body.creator.name;

    Post.findById(postId) // mongoose built in function
    .then(post => {
        if (!post) {
            const error = new Error('Could not find post.');
            error.status = 404;
            throw error;
        }

        post.title = title;
        post.content = content;
        //post.creator.name = name;
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