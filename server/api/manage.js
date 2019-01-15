const router = require('express').Router();
const { Product } = require('../db/models');
const isAdmin = require('../middlewares/isAdmin');
module.exports = router;

router.post('/products', isAdmin, async (req, res, next) => {
  try {
    const newProduct = await Product.findOrCreate({
      where: {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        stockQty: req.body.stockQty,
        image: req.body.image,
        category: req.body.category,
        size: req.body.size
      }
    });
    res.json(newProduct[0]);
  } catch (err) {
    next(err);
  }
});

router.put('/product/:id', isAdmin, async (req, res, next) => {
  try {
    const [count, update] = await Product.update(
      {
        title: req.body.title,
        description: req.body.description,
        price: req.body.price,
        stockQty: req.body.stockQty,
        image: req.body.image,
        category: req.body.category,
        size: req.body.size
      },
      {
        where: { id: req.params.id },
        returning: true,
        plain: true
      }
    );
    res.json(update);
  } catch (err) {
    next(err);
  }
});

router.delete('/product/:id', isAdmin, async (req, res, next) => {
  try {
    await Product.destroy({
      where: {
        id: req.params.id
      }
    });
    res.send(req.params.id);
  } catch (err) {
    next(err);
  }
});
