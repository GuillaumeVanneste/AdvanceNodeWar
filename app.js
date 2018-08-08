const express = require('express')
const app = express()
const server = require('http').Server(app)

app.use(express.static(__dirname + '/client/'))

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/client/index.html')
})

server.listen(process.env.PORT || 2000)

console.log('server is running')