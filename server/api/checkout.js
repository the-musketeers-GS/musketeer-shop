const router = require('express').Router();
const stripe = require('stripe')(process.env.STRIPE_SECRET);
module.exports = router;

router.post('/', async (req, res, next) => {
  try {
    const charge = await stripe.charges.create({
      amount: Number(req.body.total),
      currency: 'usd',
      source: req.body.token.id
    });
    res.json(charge);
  } catch (err) {
    next(err);
  }
});
