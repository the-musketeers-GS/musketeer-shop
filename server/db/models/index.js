const User = require('./user');
const Product = require('./product');
const Review = require('./review');
const Order = require('./order');
const OrderItem = require('./orderItem');

Order.belongsTo(User);
User.hasMany(Order);
Review.belongsTo(User);
User.hasMany(Review);
Review.belongsTo(Product);
Product.hasMany(Review);
Order.hasMany(OrderItem);
OrderItem.belongsTo(Order);

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

module.exports = {
  User,
  Product,
  Order,
  Review,
  OrderItem
};
