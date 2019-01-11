const router = require('express').Router();
const { Product } = require('../db/models');
module.exports = router;

router.put('/product/:id', async (req, res, next) => {
  try {
    const [count, update] = await Product.update(
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
    res.sendStatus(201);
  } catch (err) {
    next(err);
  }
});

router.delete('/product/:id', async (req, res, next) => {
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
