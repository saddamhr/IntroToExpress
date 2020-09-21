exports.getAllPost = (req, res) => {
    res.send(`Render All Posts`)
}

exports.getSinglePost = (req, res) => {
    res.send(`I am Post = ${req.params.id}`)
}

exports.createNewPost = (req, res) => {
    res.send(`Crete a New Post`)
}

exports.updatePost = (req, res) => {
    res.send(`Update your existing post = ${req.params.postId}`)
}

exports.deletePost = (req, res) => {
    res.send(`Delete your existing post = ${req.params.postId}`)
}
