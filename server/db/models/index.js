const User = require('./user');
const Product = require('./product');
const Review = require('./review');
const Order = require('./order');
const OrderItem = require('./orderItem');
const Cart = require('./cart');
const CartItem = require('./cartItem');

Order.belongsTo(User);
// Order.belongsToMany(Product, { through: OrderItem });
// Order.belongsToMany(OrderItem, { through: OrderItem });
Order.hasMany(OrderItem);

OrderItem.belongsTo(Order);
OrderItem.belongsTo(Product);

User.hasMany(Cart);
User.hasMany(Review);
User.hasMany(Order);

Review.belongsTo(User);
Review.belongsTo(Product);

Product.hasMany(Review);
Product.belongsToMany(Cart, { through: CartItem });
Product.belongsToMany(Order, { through: OrderItem });

Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });

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
