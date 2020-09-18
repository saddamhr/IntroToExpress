const express = require('express');

const app = express()

app.get('/', (req, res) => {
    res.send(`<h1>I am Listening!</h1>`)
})


app.get('*', (req, res)=> {
    res.send('<h1>404 NOT FOUND!</h1>')
})

const PORT = process.env.PORT || 5000
app.listen(PORT, ()=> {
    console.log(`Server running on PORT ${PORT}`)
})