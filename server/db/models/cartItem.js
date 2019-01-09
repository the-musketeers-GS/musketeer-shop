const Sequelize = require('sequelize');
const db = require('../db');

const CartItem = db.define('cartItem', {
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  }
});

module.exports = CartItem;
