const router = require('express').Router()
const {Review} = require('../db/models')
module.exports = router

router.get('/product/:id', async (req, res, next) => {
  try {
    const reviews = await Review.findAll({
      where: {productId: req.params.id}
    })
    res.json(reviews)
  } catch (error) {
    next(error)
  }
})
