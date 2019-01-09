const User = require('./user');
const Product = require('./product');
const Review = require('./review');
const Order = require('./order');
const OrderItem = require('./orderItem');
const Cart = require('./cart');
const CartItem = require('./cartItem');

Order.belongsTo(User, { as: 'customer' });
Order.belongsToMany(Product, { through: OrderItem });

OrderItem.belongsTo(Order);
OrderItem.belongsTo(Product);

// User.hasMany(Order);
User.hasMany(Review);
// User.hasOne(Cart);

Review.belongsTo(User);
Review.belongsTo(Product);

Product.hasMany(Review);
Product.belongsToMany(Cart, { through: CartItem });

Cart.belongsTo(User, { as: 'customer' });
Cart.belongsToMany(Product, { through: CartItem });
// Cart.hasMany(CartItem);

CartItem.belongsTo(Cart);
CartItem.belongsTo(Product);

module.exports = {
  User,
  Product,
  Order,
  Review,
  OrderItem,
  Cart,
  CartItem
};
