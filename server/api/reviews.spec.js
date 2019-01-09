/* global describe beforeEach it */

const { expect } = require('chai');
const db = require('../db');
//const app = require('../index');
const Review = db.model('review');
//const Product = db.model('product');

const sinon = require('sinon');
import app from './index';
import supertest from 'supertest';

describe('Review routes', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('/api/reviews/product/:id', () => {
    if (!Review.findAll) Review.findAll = function() {};
    let agent = supertest(app);
    const fakeFindAll = sinon.fake.resolves([
      { id: 1, body: 'abcdefghijklmnopqrstuwxyz', rating: 1, productId: 5 },
      {
        id: 2,
        body: 'skadfjlkasjflk;afjslk;ajfakjflaj',
        rating: 5,
        productId: 3
      }
    ]);

    beforeEach(() => {
      sinon.replace(Review, 'findAll', fakeFindAll);
    });

    afterEach(() => {
      sinon.restore();
    });

    it.only('Get one review for productId of 5', async () => {
      const response = await agent.get('/api/reviews/product/5').expect(200);
      expect(response.body).to.deep.equal([
        { id: 1, body: 'abcdefghijklmnopqrstuwxyz', rating: 1, productId: 5 }
      ]);
    });
    // let product1, review1

    // beforeEach(async () => {
    // product1 = await Product.create({
    //   title: 'Silver Musketeer Rapier',
    //   description:
    //     'The musket, though the prime weapon of the French Musketeers, was a cumbersome firearm, both to load and fire, so a good rapier was a necessary second weapon. The basket of this rapiers hilt is ambidextrous (can be used for left and right hand fighting) and a very effective mix of both the cup-hilt and swept-hilt styles. The grip is wood wrapped with twisted wire and the parts of the hilt are plated with gleaming nickel silver. The main gauche dagger is purchased separately.Due to the design and blade geometry of this rapier, it is recommended that owners do not attempt to sharpen the blade.',
    //   price: 10000,
    //   category: 'weapons'
    // })

    // review1 = await Review.create({
    //   body: 'Something Smelly and Salty!',
    //   rating: 3
    // })
    // })

    // it('GET /api/reviews/product/:id', async () => {
    //   console.log('got here.....')
    //   const res = await axios.get(`/api/reviews/product/0`)
    //   const data = res.data
    //   console.log('data.....', res)
    //   expect(data).to.be.an('array')
    //expect(res.body[0].body).to.be.equal('Something Smelly!')
    //})
  }); // end describe('/api/users')
}); // end describe('User routes')
