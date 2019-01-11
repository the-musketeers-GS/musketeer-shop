const router = require('express').Router();
const { Order, OrderItem } = require('../db/models');
module.exports = router;

// GET /api/order/  return all products in an order
router.get('/:id', async (req, res, next) => {
  const id = req.params.id;
  try {
    const products = await Order.findAll({
      where: {
        id
      }
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});
