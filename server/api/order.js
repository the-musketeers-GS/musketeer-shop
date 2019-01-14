const router = require('express').Router();
const { Order, OrderItem, Cart, CartItem, Product } = require('../db/models');
const calcTotalPrice = require('../lib/calcTotalPrice');
const isSelforAdmin = require('../middlewares/issSelforAdmin');
module.exports = router;

// GET /api/order/:userId ---- return all orders for a user
router.get('/:userId', isSelforAdmin, async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const order = await Order.findAll({
      where: { userId },
      include: [
        {
          model: OrderItem
        }
      ]
    });
    res.json(order);
  } catch (err) {
    next(err);
  }
});

// GET /api/order/:userId/:orderId/data ---- return all data for a single order
router.get('/:userId/:orderId/data', isSelforAdmin, async (req, res, next) => {
  try {
    const orderId = req.params.orderId;
    const order = await Order.findOne({ where: { id: orderId } });
    const products = await OrderItem.findAll({ where: { orderId } });
    res.json({ order, products });
  } catch (err) {
    next(err);
  }
});

// POST /api/order/:userId ---- turn Cart and CartItems into Order and OrderItems, change Cart completed to true
router.post('/:userId', isSelforAdmin, async (req, res, next) => {
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
    // re-calculate total for safety's sake
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
      newOrderItem.title = cartItem.product.title;
      newOrderItem.price = cartItem.product.price;
      newOrderItem.image = cartItem.product.image;
      await newOrderItem.save();
    });
    // 5. update cart to completed: TRUE
    await cart.update({ completed: true }, { returning: true });
    // 6. send back the newly created order
    res.status(201).json(orderId);
  } catch (err) {
    next(err);
  }
});
