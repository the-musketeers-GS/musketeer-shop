'use strict';

const db = require('../server/db');
const productsData = require('./productsData');
const reviewsData = require('./reviewsData');
const orderData = require('./orderData');
const orderItemData = require('./orderItemData');
const cartData = require('./cartData');
const cartItemData = require('./cartItemData');
const {
  User,
  Product,
  Review,
  Order,
  OrderItem,
  Cart,
  CartItem
} = require('../server/db/models');

async function seed() {
  await db.sync({ force: true });
  console.log('db synced!');

  const users = await Promise.all([
    User.create({ email: 'cody@email.com', password: '123', isAdmin: false }),
    User.create({ email: 'murphy@email.com', password: '123' }),
    User.create({ email: 'chris@email.com', password: '12345', isAdmin: true })
  ]);

  const products = await Promise.all([
    Product.bulkCreate(productsData, { returning: true })
  ]);

  const reviews = await Promise.all([
    Review.bulkCreate(reviewsData, { returning: true })
  ]);

  const orders = await Promise.all([
    Order.bulkCreate(orderData, { returning: true })
  ]);

  const orderItems = await Promise.all([
    OrderItem.bulkCreate(orderItemData, { returning: true })
  ]);

  const carts = await Promise.all([
    Cart.bulkCreate(cartData, { returning: true })
  ]);

  const cartItems = await Promise.all([
    CartItem.bulkCreate(cartItemData, { returning: true })
  ]);

  console.log(`seeded ${users.length} users`);
  console.log(`seeded ${products.length} products`);
  console.log(`seeded ${reviews.length} reviews`);
  console.log(`seeded ${orders.length} orders`);
  console.log(`seeded ${orderItems.length} orderItems`);
  console.log(`seeded ${carts.length} carts`);
  console.log(`seeded ${cartItems.length} cartItems`);
  console.log(`seeded successfully`);
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...');
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    console.log('closing db connection');
    await db.close();
    console.log('db connection closed');
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed();
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed;
