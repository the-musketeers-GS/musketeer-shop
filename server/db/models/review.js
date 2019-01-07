const Sequelize = require('sequelize')
const db = require('../db')

const Review = db.define('review', {
  body: {
    type: Sequelize.TEXT,
    validate: {
      len: {
        args: [[20, 500]],
        msg: 'Review needs to be between 20 and 500 characters.'
      }
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
})

module.exports = Review
