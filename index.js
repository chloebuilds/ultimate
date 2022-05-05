import express from 'express'
import axios from 'axios'
// import errorHandler from './lib/errorHandler.js'
// import logger from './lib/logger.js'

const app = express()
const PORT = 4000

app.listen(PORT, () => console.log(`🤖 Server running on port ${PORT}`))

// MIDDLEWARE
app.use(express.json())
// app.use(errorHandler)
// app.use(logger)

app.get('/', (_req, res) => {
  res.send('hello world')
})

// REST Countries API
const API = 'https://restcountries.com/v3.1'

// GET THE REGION
app.get('/:id', async (req, res) => {
  try {
    const regionQuery = req.params.id
    const { data } = await axios.get(`${API}/region/${regionQuery}`)
    console.log(data.name)

    // Return to user
    return res.status(200).json(data)
  } catch (error) {
    console.log('error', error)
    return res.status(404).json({ message: '🥺 Something has gone wrong!' })
  }
})
