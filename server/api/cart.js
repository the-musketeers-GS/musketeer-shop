const router = require('express').Router();
const { Cart, CartItem, Product } = require('../db/models');
module.exports = router;

// GET /api/cart/:cartId/items ---- return items on a specific cart/order instance
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

// POST /api/cart/:userId/:productId ---- create cart item
router.post('/:userId/:productId', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const productId = req.params.productId;
    // TODO 1. check if user is logged in (later)
    // 2. if they are, check if they have an exisiting cart, findOne where customer id
    let cartId;
    const cart = await Cart.findOne({
      where: {
        userId
      }
    });
    if (cart) {
      cartId = cart.id;
    }
    // 3. if they DO have cart, find or create the cartItem with params/productId and current cart id
    // 3.1 if they DON'T have cart, build one and set userId and save
    if (!cart) {
      const newCart = Cart.build();
      newCart.userId = userId;
      await newCart.save();
      cartId = newCart.id;
      console.log('NO CART', cartId);
    }
    // 4 find or create the item (to see if it already exists)
    // isNew will be false if found and true if created
    const [item, isNew] = await CartItem.findOrCreate({
      where: {
        productId,
        cartId
      }
    });
    console.log('CART ITEM EXISTS...', !isNew);
    // 5 if that item already exists, update quantity
    if (!isNew) {
      await item.update(
        {
          quantity: req.body.qty + item.quantity,
          cartId
        },
        {
          returning: true
        }
      );
    }
    res.status(201).json(item);
  } catch (err) {
    next(err);
  }
});
