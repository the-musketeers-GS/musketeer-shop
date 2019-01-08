const Sequelize = require('sequelize');
const db = require('../db');

const OrderItem = db.define('orderItem', {
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

module.exports = OrderItem;
