const Sequelize = require('sequelize');
const db = require('../db');

const OrderItem = db.define('orderItem', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  title: {
    type: Sequelize.STRING
  },
  productId: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  price: {
    type: Sequelize.INTEGER
  },
  quantity: {
    type: Sequelize.INTEGER
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: `http://sueadler.com/wp-content/uploads/2015/04/shutterstock_133818692-279x300.jpg`
  }
});

module.exports = OrderItem;
