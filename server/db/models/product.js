const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.DECIMAL,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  photo: {
    type: Sequelize.STRING,
    defaultValue: `http://sueadler.com/wp-content/uploads/2015/04/shutterstock_133818692-279x300.jpg`
  },
  category: {
    type: Sequelize.ENUM('clothes', 'hats', 'boots', 'weapons', 'accessories')
  },
  size: {
    type: Sequelize.enum('S', 'M', 'l', 'XL')
  }
})

module.exports = Product
