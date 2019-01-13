let guestCart = [];

guestCart.saveToCart = function(product) {
  if (guestCart.length < 1) {
    guestCart.concat(product);
  } else {
    let newItem = true;
    for (let i = 0; i < guestCart.length; i++) {
      if (guestCart[i].id === product.it) {
        newItem = false;
        let quantity = parseInt(guestCart[i].quantity);
        quantity++;
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
