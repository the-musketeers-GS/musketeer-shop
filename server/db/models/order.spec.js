const {expect} = require('chai')
const db = require('../index')
const Order = db.model('order')

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({force: true})
  })

  describe('instanceMethods', () => {
    describe('', () => {
      let orderTest

      beforeEach(async () => {
        orderTest = await Order.create({
          productId: 1,
          price: 1234,
          quantity: 4
        })
      })

      it('returns default completed value to be false', () => {
        expect(orderTest.completed).to.be.equal(false)
      })
    })
  })
})