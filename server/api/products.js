const router = require('express').Router();
const { Product } = require('../db/models');
module.exports = router;

router.get('/', async (req, res, next) => {
  try {
    const products = await Product.findAll();
    res.json(products);
  } catch (err) {
    next(err);
  }
});

router.get('/:id', async (req, res, next) => {
  try {
    const product = await Product.findById(req.params.id);
    res.json(product);
  } catch (err) {
    next(err);
  }
});

router.put('/:id', async (req, res, next) => {
  try {
    const { data: product } = await Product.update(
      {
        title: req.body.title,
        price: 345
      },
      {
        where: { id: req.params.id },
        returning: true,
        plain: true
      }
    );
    res.json(product);
  } catch (err) {
    next(err);
  }
});
