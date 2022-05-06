const request = require('supertest')
const app = require('../index')

describe('GET region details', () => {
  test('Should return region data', done => {
    request(app).get('/europe')
      .then(res => {
        expect(res.statusCode).toBe(200)
        done()
      })
  })
})