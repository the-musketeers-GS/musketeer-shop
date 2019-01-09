const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  orderNumber: {
    type: Sequelize.STRING
  },
  total: {
    type: Sequelize.INTEGER
  },
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false
  }
});

module.exports = Order;
