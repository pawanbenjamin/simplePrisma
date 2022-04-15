const express = require('express')

const app = express()

const morgan = require('morgan')

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(morgan('tiny'))

app.get('/', (req, res, next) => {
  res.send('I am Alive...')
})

app.use('/api', require('./api'))

module.exports = app
