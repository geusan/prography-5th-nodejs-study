const request = require('supertest');
const app = require('../../app');

describe('test start!', () => {
  test('GET /users', async () => {
    const res = await request(app).get('/users');
    expect(res.body).toStrictEqual({
      data: [{
        id: '1571414028025',
        name: '김덕배',
      }]
    })
  })
})