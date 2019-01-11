const router = require('express').Router();
const { Product, Review } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll({
      include: [Review]
    });
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id, {
      include: [Review]
    });
    res.json(product);
  } catch (err) {
    next(err);
  }
});
