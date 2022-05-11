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

    countriesArray = data.map(country => {
      return {
        countryName : country.name.common,
        population : country.population,
        area: country.area
      }
    })
    console.log('COUNTRIES ARRAY -->', countriesArray)

    // get the total population of all the country populations
    const totalPopulation = countriesArray.reduce((acc, obj) => {
      return acc + obj.population
    }, 0)
    
    const highestPopulation = countriesArray.reduce((prev, current) => (prev.population > current.population) ? prev : { countryName: current.countryName, population: current.population})
    
    // 1. return the total area of the region
    // 2. return the country with the highest area

    const totalArea = countriesArray.reduce((acc, obj) => {
      return acc + obj.area
    }, 0)
    console.log('TOTAL AREA -->', totalArea)

    const highestArea = countriesArray.reduce((prev, current) => (prev.area > current.area) ? prev : { countryName: current.countryName, area: current.area})
    console.log('HIGHEST AREA -->', highestArea)

    // store the data in the response
    response.regionTotalPopulation = totalPopulation
    response.highestPopulationCountry = highestPopulation
    response.totalArea = totalArea
    response.highestAreaCountry = highestArea

    console.log('FINAL RESPONSE -->', response)

    // Return to user
    return res.status(200).json(response)
  } catch (error) {
    console.log('🚨🚨🚨 Here is the error', error)
    return res.status(400).json({ message: '🥺 Something has gone wrong!' })
  }
}