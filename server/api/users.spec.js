/* global describe beforeEach it */

const { expect } = require('chai');
const request = require('supertest');
const db = require('../db');
const app = require('../index');
const User = db.model('user');

describe('User routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('/api/users/', () => {
    const codysEmail = 'cody@puppybook.com';

    beforeEach(() => {
      return User.create({
        email: codysEmail,
        firstName: 'Cody',
        lastName: 'Puggy',
        addr1: '555 Puppy Dog Lane',
        city: 'Moline',
        state: 'IL',
        zipCode: '61240',
        phone: '0123456789',
        isAdmin: false
      });
    });

    it('GET /api/users', async () => {
      const res = await request(app)
        .get('/api/users')
        .expect(200);

      expect(res.body).to.be.an('array');
      expect(res.body[0].email).to.be.equal(codysEmail);
    });
  }); // end describe('/api/users')
}); // end describe('User routes')
