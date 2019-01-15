const router = require('express').Router();
module.exports = router;

router.use('/users', require('./users'));
router.use('/order', require('./order'));
router.use('/cart', require('./cart'));
router.use('/reviews', require('./reviews'));
router.use('/products', require('./products'));
router.use('/manage', require('./manage'));
router.use('/checkout', require('./checkout'));

router.use((req, res, next) => {
  const error = new Error('Not Found');
  error.status = 404;
  next(error);
});
