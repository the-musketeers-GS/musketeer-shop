const Sequelize = require('sequelize');
const db = require('../db');

const Order = db.define('order', {
  total: {
    type: Sequelize.INTEGER
  },
  status: {
    // 1: checkout clicked
    // 2: confirmation email sent
    // 3: shipping
    // 4: delivered && order closed
    type: Sequelize.INTEGER,
    defaultValue: 1,
    validate: {
      min: 1,
      max: 4
    }
  }
});

module.exports = Order;
