const {expect} = require('chai')
const db = require('../index')
const OrderItem = db.model('orderItem')

describe('OrderItem model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('', () => {
      let orderTest

      beforeEach(async () => {
        orderTest = await OrderItem.create({
          productId: 1,
          price: 1234,
          quantity: 4
        })
      })

      it('creates an orderItem', () => {
        expect(orderTest.productId).to.be.equal(1)
        expect(orderTest.price).to.be.equal(1234)
      })
    })
  })
})
