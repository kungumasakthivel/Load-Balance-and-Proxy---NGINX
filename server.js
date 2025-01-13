const express = require('express')
const path = require('path')
const app = express()
const port = 3000

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log('index.html file sent')
})

app.listen(port, () => {
    console.log(`running on port ${port}`)
})