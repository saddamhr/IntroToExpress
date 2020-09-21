const router = require('express').Router()

router.get('/', (req, res) => {
    res.send(`Render All Posts`)
})

router.get('/:postId', (req, res) => {
    res.send(`I am Post = ${req.params.id}`)
})

router.post('/', (req, res) => {
    res.send(`Crete a New Post`)
})

router.put('/:postId', (req, res) => {
    res.send(`Update your existing post = ${req.params.postId}`)
})

router.delete('/:postId', (req, res) => {
    res.send(`Delete your existing post = ${req.params.postId}`)
})

module.exports = router