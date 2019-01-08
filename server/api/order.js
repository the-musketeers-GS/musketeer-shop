const router = require('express').Router();
const { Order } = require('../db/models');
module.exports = router;

// GET /api/order/  return all products in an order where completed = false (current cart items)
router.get('/', async (req, res, next) => {
  const { userId } = req.body;
  try {
    const products = await Order.findAll({
      where: {
        completed: false,
        userId
      }
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});
