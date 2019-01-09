const router = require('express').Router();
const { Cart, CartItem, Product } = require('../db/models');
module.exports = router;

// GET /api/cart/:cartId/items  return items on a specific cart/order instance
router.get('/:cartId/items', async (req, res, next) => {
  const cartId = req.params.cartId;
  try {
    const cartItems = await CartItem.findAll({
      where: { cartId },
      include: [{ model: Product, attributes: ['id', 'title', 'price'] }]
    });
    res.json(cartItems);
  } catch (err) {
    next(err);
  }
});

// POST /api/cart/  create cart item
// router.post('/:id', async (req, res, next) => {
//   const id = req.params.id;
//   try {
//   } catch (err) {
//     next(err);
//   }
// });
