const router = require('express').Router()
const {Order} = require('../db/models')
module.exports = router

// GET /api/order/  return all products in an order where completed = false
router.get('/', async (req, res, next) => {
  try {
    const products = await Order.findAll({
      where: {
        completed: false
      }
    })
    res.json(products)
  } catch (err) {
    next(err)
  }
})
