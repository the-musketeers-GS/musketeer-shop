const router = require('express').Router();
const { Product } = require('../db/models');
module.exports = router;

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
