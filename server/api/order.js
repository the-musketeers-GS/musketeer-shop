const router = require('express').Router();
const { Order, OrderItem, Cart, CartItem, Product } = require('../db/models');
const calcTotalPrice = require('../lib/calcTotalPrice');
module.exports = router;

// GET /api/order/:orderId  return all products in an order
router.get('/:orderId', async (req, res, next) => {
  const orderId = req.params.orderId;
  try {
    // const order = await Order.findAll({
    //   where: {
    //     id: orderId
    //   }
    // });
    const products = await OrderItem.findAll({ where: { orderId } });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

// POST /api/order/:userId
router.post('/:userId', async (req, res, next) => {
  try {
    // 1. find cart for user + save cartId
    const userId = req.params.userId;
    const cart = await Cart.findOne({ where: { userId, completed: false } });
    const cartId = cart.id;
    // 2. find cartItems and store in array
    const cartItems = await CartItem.findAll({
      where: { cartId },
      include: [
        { model: Product, attributes: ['id', 'title', 'price', 'image'] }
      ]
    });
    // calculate total for safety's sake
    const total = calcTotalPrice(cartItems);
    // 3. build order and grab orderId
    const newOrder = await Order.build();
    newOrder.userId = userId;
    newOrder.total = total;
    await newOrder.save();
    const orderId = newOrder.id;
    // 4. map over cartItems and create orderItem for each
    await cartItems.map(async cartItem => {
      const newOrderItem = await OrderItem.build();
      newOrderItem.orderId = orderId;
      newOrderItem.quantity = cartItem.quantity;
      newOrderItem.productId = cartItem.productId;
      newOrderItem.price = cartItem.product.price;
      await newOrderItem.save();
    });
    // 5. update cart to completed: TRUE
    await cart.update({ completed: true }, { returning: true });
    res.json(orderId);
  } catch (err) {
    next(err);
  }
});
