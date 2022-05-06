import express from 'express'
import axios from 'axios'
// import errorHandler from './lib/errorHandler.js'
// import logger from './lib/logger.js'

const app = express()
const PORT = 4000


// MIDDLEWARE
app.use(express.json())
// app.use(errorHandler)
// app.use(logger)

app.get('/', (_req, res) => {
  res.send('hello world!')
})


// REST Countries API
const API = 'https://restcountries.com/v3.1'

// GET THE REGION
app.get('/:id', async (req, res) => {
  try {
    const response = {}
    let countriesArray = []
    const regionQuery = req.params.id

    // get the data based on the region query
    const { data } = await axios.get(`${API}/region/${regionQuery}`)

    //response.population = data[0].population
    
    // map over the data to return the name and population to store in countriesArray
    countriesArray = data.map(({ name, population }) => ({
      name,
      population
    }))
    console.log(countriesArray)
    
    // get the total population of all the country populations
    const totalPopulation = countriesArray.reduce(function (acc, obj) {
      return acc + obj.population
    }, 0)
    console.log('total population', totalPopulation)
    
    const highestPopulation = countriesArray.reduce((prev, current) => (+prev.population > +current.population) ? prev : current)
    console.log('highest population', highestPopulation)

    // storing the data in the response
    response.totalPopulation = totalPopulation
    response.highestPopulation = highestPopulation
    
    console.log(response)
    // 

    // Return to user
    return res.status(200).json(data)
  } catch (error) {
    console.log('🚨🚨🚨 Here is the error', error)
    return res.status(404).json({ message: '🥺 Something has gone wrong!' })
  }
})


app.listen(PORT, () => console.log(`🤖 Server running on port ${PORT}`))
