const router = require('express').Router();
const { Review, Product, User } = require('../db/models');
module.exports = router;

router.get('/product/:id', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: { productId: req.params.id }
    });
    res.json(reviews);
  } catch (error) {
    next(error);
  }
});

router.post('/product/:prodId/user/:userId', async (req, res, next) => {
  try {
    let product = await Product.findOne({
      where: { id: req.params.prodId }
    });
    let user = await User.findOne({
      where: { id: req.params.userId }
    });
    let review = await Review.create(req.body);
    await review.setUser(user);
    let productReview = await review.setProduct(product);

    res.status(201).json(productReview);
  } catch (error) {
    next(error);
  }
});
