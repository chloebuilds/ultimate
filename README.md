# Ultimate Task

A node.js backend that contains a GET endpoint (plus a little bonus). The endpoint takes a query of a region then returns the name and population from the REST Countries API. With the data the population from each country is calculated to return the total population, along with returning the name and population of the country with the highest population.

## Technologies used
- Node.js
- Axios
- Supertest
- Jest
- Insomnia

### Query
When querying 'Oceania':
```js
  http://localhost:4000/oceania
```
Or to query 'Europe':
```
http://localhost:4000/europe
```

### Response
```
// OCEANIA
{
	"regionTotalPopulation": 43119432,
	"highestPopulationCountry": {
		"name": {
			"common": "Australia",
			"official": "Commonwealth of Australia",
			"nativeName": {
				"eng": {
					"official": "Commonwealth of Australia",
					"common": "Australia"
				}
			}
		},
		"population": 25687041
	}
}
```
```js
// EUROPE
{
	"regionTotalPopulation": 746934072,
	"highestPopulationCountry": {
		"name": {
			"common": "Russia",
			"official": "Russian Federation",
			"nativeName": {
				"rus": {
					"official": "Российская Федерация",
					"common": "Россия"
				}
			}
		},
		"population": 144104080
	}
}

```

### Testing
To run the test use `npm run test`

The test makes sure that the queried response of a region from the REST Countries API is ok and returns a 200 response.
