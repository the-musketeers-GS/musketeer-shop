const calcTotalPriceGuest = array => {
  return array
    .map(product => product.quantity * product.price)
    .reduce((a, b) => a + b);
};

module.exports = calcTotalPriceGuest;
