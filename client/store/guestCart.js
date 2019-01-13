const GUEST_ADD_CART = 'GUEST_ADD CART';
const GUEST_REMOVE_CART = 'REMOVE_FROM_CART';

export const guestAddCart = product => ({
  type: GUEST_ADD_CART,
  product
});

export const guestRemoveCartItem = product => ({
  type: GUEST_REMOVE_CART,
  product
});

const initialState = {
  cart: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GUEST_ADD_CART: {
      let foundIdx;
      const prevState = { ...state };
      const found = prevState.cart.find((item, index) => {
        foundIdx = index;
        return item.id === action.product.id;
      });
      if (found) {
        found.quantity = state.cart[foundIdx].quantity + 1;

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
    default:
      return state;
  }
}
