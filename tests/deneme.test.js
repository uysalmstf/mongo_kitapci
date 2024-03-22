'use strict';

const request = require('supertest');
const app = require('../app'); 
// Replace 'app' with the path to your Express.js or other API app.
//const api = supertest(app);


describe('API Testing with Supertest', () => {
    // Your test cases will go here.
    it('should get a list of items', async () => {
        request(app)
      .get('/author/list')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200)
      .end(function(err, res) {
        if (err) throw err;
      });
      });
  });