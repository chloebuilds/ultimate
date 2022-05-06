import express from 'express'
import errorHandler from './middleware/errorHandler.js'
import logger from './middleware/logger.js'
import ultimateResponse from './controllers/regionController.js'


const app = express()

// MIDDLEWARE
app.use(express.json())
app.use(errorHandler)
app.use(logger)

// HI ULTIMATE
app.get('/', (_req, res) => {
  res.send('🗺 Hello World! 🌏 Welcome to the Ultimate Test. 🌍 Add a region of the world to the end of the URL above to find the total population and the country with the highest population 🕵️‍♀️')
})

// GET THE RESPONSE
app.get('/:id', ultimateResponse)

export default app