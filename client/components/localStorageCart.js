let cartItems = {};
let noUserCart = {};

noUserCart.saveToCart = function(productId) {
  if (cartItems === null) {
    cartItems = {
      count: '1',
      items: [{ item: productId, quanitty: '1' }]
    };
  } else {
    let newItem = true;
    for (let i = 0; i < cartItems.items.length; i++) {
      if (cartItems.items[i].item === productId) {
        newItem = false;
        let itemQuantity = parseInt(cartItems.items[i].quantity);
        itemQuantity++;
        cartItems.items[i].quantity = itemQuantity.toString();
      }
    }
    if (newItem) {
      cartItems.items.push({ item: productId, quantity: '1' });
    }
  }
  let cartCount = cartItems.count;
  cartCount++;
  cartItems.count = cartCount.toString();

  localStorage['noUserCart.cart'] = JSON.stringify(cartItems);
};

export default noUserCart;
