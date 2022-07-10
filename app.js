const express = require('express')
const logger = require('morgan')
const cors = require('cors')

const codesRouter = require('./routes/api/codes')
const locationsRouter = require('./routes/api/locations')

const app = express()

const formatsLogger = app.get('env') === 'development' ? 'dev' : 'short'

app.use(logger(formatsLogger))
app.use(cors())
app.use(express.json())

app.use('/api/codes', codesRouter)
app.use('/api/locations', locationsRouter)

app.use((_, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

module.exports = app
