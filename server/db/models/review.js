const Sequelize = require('sequelize');
const db = require('../db');

const Review = db.define('review', {
  body: {
    type: Sequelize.TEXT,
    validate: {
      len: [20, 500]
    }
  },
  rating: {
    type: Sequelize.INTEGER,
    validate: {
      min: 1,
      max: 5
    }
  }
});

module.exports = Review;
