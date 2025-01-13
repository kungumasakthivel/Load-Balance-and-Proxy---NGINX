const express = require('express')
const path = require('path')
const app = express()
const port = 3000

const SERVER_BY = process.env.APP_NAME

app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
    console.log(`index.html file sent by ${SERVER_BY}`)
})

app.listen(port, () => {
    console.log(`${SERVER_BY}running on port ${port}`)
})