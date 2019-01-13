const { expect } = require('chai');
const db = require('../index');
const Order = db.model('order');

describe('Order model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  describe('instanceMethods', () => {
    describe('', () => {
      let orderTest;

      beforeEach(async () => {
        orderTest = await Order.create({
          total: 12345
        });
      });

      it('returns default order status to be 1', () => {
        expect(orderTest.status).to.be.equal(1);
      });
    });
  });
});
