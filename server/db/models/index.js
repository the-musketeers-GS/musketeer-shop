const User = require('./user');
const Product = require('./product');
const Review = require('./review');
const Order = require('./order');
const OrderItem = require('./orderItem');
const Cart = require('./cart');
const CartItem = require('./cartItem');

Order.belongsTo(User /*{ as: 'customer' }*/);
Order.belongsToMany(Product, { through: OrderItem });

OrderItem.belongsTo(Order);
OrderItem.belongsTo(Product);

User.hasMany(Review);
User.hasMany(Order /*{ as: 'customer' }*/);

Review.belongsTo(User);
Review.belongsTo(Product);

Product.hasMany(Review);
Product.belongsToMany(Cart, { through: CartItem });
Product.belongsToMany(Order, { through: OrderItem });

Cart.belongsTo(User /*{ as: 'customer' }*/);
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
