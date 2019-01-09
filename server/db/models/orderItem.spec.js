const { expect } = require('chai');
const db = require('../index');
const OrderItem = db.model('orderItem');
const Order = db.model('order');

describe('OrderItem model', () => {
  beforeEach(() => {
    return db.sync({ force: true });
  });

  xdescribe('instanceMethods', () => {
    describe('', () => {
      let order;
      let orderTest;
      beforeEach(async () => {
        order = await Order.create({
          orderNumber: 111,
          total: 1234 * 4,
          completed: false
        });

        orderTest = await OrderItem.create({
          productId: 5,
          price: 1234,
          quantity: 4,
          orderId: 1
        });
      });

      it('creates an orderItem', () => {
        expect(orderTest.productId).to.be.equal(1);
        expect(orderTest.price).to.be.equal(1234);
      });
    });
  });
});
