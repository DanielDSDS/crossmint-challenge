const express = require('express')
const dotenv = require('dotenv')
const http = require('http')
const cors = require('cors')
const megaverseRouter = require('./src/routes/index')

// Startup
const app = express()
dotenv.config()

// Middleware
app.use(cors())
app.use(express.json())

// Register routes
app.use(megaverseRouter)

const port = process.env.PORT || 5000

const server = http.createServer(app)

server.listen(port, (err) => {
  if (err) throw err
  console.log('Server started at ' + port)
})

module.exports = app
