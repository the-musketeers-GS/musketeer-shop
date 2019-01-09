const router = require('express').Router();
const { Cart, CartItem } = require('../db/models');
module.exports = router;

// GET /api/cart/:userId  return user's cart
router.get('/:userId', async (req, res, next) => {
  const id = req.params.userId;
  try {
    const cart = await Cart.findById(id);
    res.json(cart);
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
