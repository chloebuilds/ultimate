import axios from "axios"

export default async function ultimateResponse(req, res) {
  // REST Countries API
  const API = 'https://restcountries.com/v3.1'  
  
  try {
    const response = {}
    let countriesArray = []

    const regionQuery = req.params.id

    // get the data based on the region query
    const { data } = await axios.get(`${API}/region/${regionQuery}`)
    
    // map over the data to return the name and population to store in countriesArray
    countriesArray = data.map(({ name, population }) => ({
      name,
      population
    }))
    
    // get the total population of all the country populations
    const totalPopulation = countriesArray.reduce(function (acc, obj) {
      return acc + obj.population
    }, 0)
    
    const highestPopulation = countriesArray.reduce((prev, current) => (+prev.population > +current.population) ? prev : current)

    // store the data in the response
    response.regionTotalPopulation = totalPopulation
    response.highestPopulationCountry = highestPopulation

    // Return to user
    return res.status(200).json(response)
  } catch (error) {
    console.log('🚨🚨🚨 Here is the error', error)
    return res.status(400).json({ message: '🥺 Something has gone wrong!' })
  }
}