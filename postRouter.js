const router = require('express').Router()
const { getAllPost, getSinglePost, createNewPost, updatePost, deletePost} = require('./postController')

router.get('/', getAllPost)

router.get('/:postId', getSinglePost)

router.post('/', createNewPost)

router.put('/:postId', updatePost)

router.delete('/:postId', deletePost)

module.exports = router