const calcTotalPriceGuest = array => {
  if (!array.length) return 0;
  return array
    .map(product => product.quantity * product.price)
    .reduce((a, b) => a + b);
};

module.exports = calcTotalPriceGuest;
