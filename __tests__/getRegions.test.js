import request from 'supertest'
import app from '../index.js'

describe('GET region details', () => {
  test('Should return region data', done => {
    request(app).get('/europe')
      .then(res => {
        expect(res.statusCode).toBe(200)
        done()
      })
  })
})