
const express = require('express')

const app = express()

const port = 4500


app.get("/", (req, res) => {
    res.send('HELLO WORLD RENDER !')
    root = __dirname
})
app.listen(port)
console.log(`Server on port, ${port}`)