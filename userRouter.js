const router = require('express').Router()

router.get('/login', (req, res, next)=> {
    res.send('I am login route')
})

router.get('/logout', (req, res, next)=> {
    res.send('I am logout route')
})

router.get('/signup', (req, res, next) => {
    res.send('I am signup route')
})

module.exports = router