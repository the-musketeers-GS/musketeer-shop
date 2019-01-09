const Sequelize = require('sequelize');
const db = require('../db');

const Cart = db.define('cart', {
  total: {
    type: Sequelize.INTEGER
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Cart;
