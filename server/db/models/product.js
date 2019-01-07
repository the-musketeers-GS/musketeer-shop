const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('product', {
  title: {
    type: Sequelize.STRING,
    unique: true,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  description: {
    type: Sequelize.TEXT
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  quantity: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: `http://sueadler.com/wp-content/uploads/2015/04/shutterstock_133818692-279x300.jpg`
  },
  category: {
    type: Sequelize.ENUM('clothes', 'hats', 'boots', 'weapons', 'accessories')
  },
  size: {
    type: Sequelize.ENUM('S', 'M', 'l', 'XL')
  }
})

module.exports = Product
