const GUEST_ADD_CART = 'GUEST_ADD CART';
const GUEST_REMOVE_ITEM = 'GUEST_REMOVE_ITEM';

export const guestAddCart = product => ({
  type: GUEST_ADD_CART,
  product
});

export const guestRemoveCartItem = id => ({
  type: GUEST_REMOVE_ITEM,
  id
});

const initialState = {
  cart: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GUEST_ADD_CART: {
      let findProduct;
      const prevState = { ...state };
      const product = prevState.cart.find((item, index) => {
        findProduct = index;
        return item.id === action.product.id;
      });
      if (product) {
        product.quantity = state.cart[findProduct].quantity + 1;
        const newState = { ...state, cart: [...state.cart] };
        window.localStorage.guestCart = JSON.stringify(newState);
        return newState;
      } else {
        const newState = {
          ...state,
          cart: [...state.cart, { ...action.product, quantity: 1 }]
        };
        window.localStorage.guestCart = JSON.stringify(newState);
        return newState;
      }
    }
    case GUEST_REMOVE_ITEM:
      const newState = {
        ...state,
        cart: state.cart.filter(product => product.id !== action.id)
      };
      window.localStorage.guestCart = JSON.stringify(newState);
      return newState;
    default:
      return state;
  }
}
