export default function calcTotalPrice(cart) {
  console.log('CART>>>>>', cart);
  return cart.reduce((tally, cartItem) => {
    if (!cartItem.product) return tally;
    return tally + cartItem.quantity * cartItem.product.price;
  }, 0);
}
