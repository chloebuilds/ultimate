# Ultimate Task

A node.js backend that contains a GET endpoint (plus a little bonus). The endpoint takes a query of a region then returns the name and population from the REST Countries API. With the data the population from each country is calculated to return the total population, along with returning the name and population of the country with the highest population.

## Technologies used
- Node.js
- Axios
- Supertest
- Jest
- Insomnia

## How to Run
### Start the server
To run the server please run `npm run start`. The server is successfully running when you see the message: `🤖 Server running on port 4000`. Now you can make requests - I used Insomnia but you could also use your browser. Please enter your URL's like the example below following the pattern of `http://localhost:4000/{region}.` The regions you can choose from are: Africa, America, Asia, Europe, Oceania. 

### Query examples
When querying 'Oceania':
`http://localhost:4000/oceania` or 'Europe': `http://localhost:4000/europe`

### Response examples
// OCEANIA
``` json
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

// EUROPE
```json
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
