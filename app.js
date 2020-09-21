const express = require('express')
const morgan = require('morgan')
const userRouter = require('./userRouter')
const postRouter = require('./postRouter')

const app = express()
app.use(morgan('dev'))


const router = express.Router()


app.use('/user', userRouter);
app.use('/post', postRouter)

app.get('/', (req, res) => {
    res.send(`<h1>I am Listening!</h1>`)
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
    console.log(`Server running on PORT ${PORT}`)
})