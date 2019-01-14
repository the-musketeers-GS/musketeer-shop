const Sequelize = require('sequelize');
const db = require('../db');

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
    type: Sequelize.TEXT,
    defaultValue: 'Three Musketeers Item'
  },
  price: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  stockQty: {
    type: Sequelize.INTEGER,
    defaultValue: 1
  },
  image: {
    type: Sequelize.STRING,
    defaultValue: '/images/product-image-coming-soon.png'
  },
  category: {
    type: Sequelize.ENUM('clothes', 'hats', 'boots', 'weapons', 'accessories'),
    defaultValue: 'accessories'
  },
  size: {
    type: Sequelize.ENUM('S', 'M', 'L', 'XL', 'NA'),
    defaultValue: 'NA'
  }
});

module.exports = Product;
