const router = require('express').Router();
const { Cart, CartItem, Product } = require('../db/models');
module.exports = router;

// GET /api/cart/:userId/items ---- return items on a specific user/cart instance
router.get('/:userId/items', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    let cartId;
    let cartItems;
    const cart = await Cart.findOne({
      where: {
        userId,
        completed: false
      }
    });
    if (cart) {
      cartId = cart.id;
      cartItems = await CartItem.findAll({
        where: { cartId },
        include: [
          { model: Product, attributes: ['id', 'title', 'price', 'image'] }
        ]
      });
      return res.json(cartItems);
    }
    return res.json({ message: 'no cart found' });
  } catch (err) {
    next(err);
  }
});

// POST /api/cart/:userId/:productId ---- create cart item
router.post('/:userId/:productId', async (req, res, next) => {
  try {
    const userId = req.params.userId;
    const productId = req.params.productId;
    //?. check if user is logged in (later)
    // handling loggedOut users on frontend
    // 2. if they are, check if they have an exisiting cart, findOne where customer id
    let cartId;
    const cart = await Cart.findOne({
      where: {
        userId,
        completed: false
      }
    });
    if (cart) {
      cartId = cart.id;
    }
    // 3 if they DON'T have cart, build one and set userId and save
    if (!cart) {
      const newCart = Cart.build();
      newCart.userId = userId;
      await newCart.save();
      cartId = newCart.id;
    }
    // 4 find or create the item (to see if it already exists)
    // isNew will be false if found and true if created
    const [item, isNew] = await CartItem.findOrCreate({
      where: {
        productId,
        cartId
      }
    });
    // 5 if that item already exists, update quantity
    if (!isNew) {
      await item.update(
        {
          quantity: item.quantity + 1,
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

// DELETE /api/cart/:userId/:productId ---- delete cart item instance
router.delete('/:userId/:productId', async (req, res, next) => {
  const userId = req.params.userId;
  const productId = req.params.productId;
  try {
    // 1 find the cart to get cartId
    const cart = await Cart.findOne({
      where: { userId }
    });
    const cartId = cart.id;
    // 2 await destroy item
    await CartItem.destroy({
      where: {
        cartId,
        productId
      }
    });
    res.json(productId);
  } catch (err) {
    next(err);
  }
});
