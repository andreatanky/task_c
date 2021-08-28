const { post } = require("../routes/feed");

// posts = [
//     {
//         todo: 'Cook dinner',
//         id: 1
//     },
//     {
//         todo: 'Do homework',
//         id: 2
//     }    
// ]

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
    res.status(201).json({
        message: 'Post created successfully!',
        post: {
            _id: new Date().toISOString(),
            title: title,
            content: content,
            creator: {name: 'Andrea'},
            createdAt: new Date()
        }
    })
    posts.push({todo: todo, id: id})
}

exports.deletePost = (req, res, next) => {
    res.status(200).json({
        message: 'Post deleted successfully!'
    })
}

exports.putPost = (req, res, next) => {
    
}