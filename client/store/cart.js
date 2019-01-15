import axios from 'axios';

// ACTION TYPES
// const REQUEST_MADE = 'REQUEST_MADE';
const REQUEST_CART = 'REQUEST_CART';
const TOGGLE_CART = 'TOGGLE_CART';
const CHECK_LOCALSTORAGE = 'CHECK_LOCALSTORAGE';

// ACTION CREATORS
// export const requestMade = () => ({
//   type: REQUEST_MADE
// });
export const requestCart = products => ({
  type: REQUEST_CART,
  products
});
export const toggleCart = () => ({
  type: TOGGLE_CART
});

export const checkLocalStorage = () => ({
  type: CHECK_LOCALSTORAGE
});

// THUNK CREATORS
export const fetchCart = userId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/cart/${userId}/items`);
    const dispatchData = data.length ? data : [];
    dispatch(requestCart(dispatchData));
  } catch (err) {
    console.error(err);
  }
};
export const createCartItem = (userId, productId) => async dispatch => {
  // dispatch(requestMade());
  try {
    await axios.post(`/api/cart/${userId}/${productId}`);
    dispatch(fetchCart(userId));
  } catch (err) {
    console.error(err);
  }
};
export const deleteCartItem = (userId, productId) => async dispatch => {
  // dispatch(requestMade());
  try {
    await axios.delete(`/api/cart/${userId}/${productId}`);
    dispatch(fetchCart(userId));
  } catch (err) {
    console.error(err);
  }
};

// INITIAL STATE
const initialState = {
  products: [],
  isOpen: false
  // isLoading: false
};

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    // case REQUEST_MADE: {
    //   return { ...state, isLoading: true };
    // }
    case REQUEST_CART:
      return { ...state, products: action.products };
    case TOGGLE_CART:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}

export function localCartMiddleware(store) {
  return next => action => {
    if (action.type === CHECK_LOCALSTORAGE) {
      let state = store.getState();
      const isAuthenticated = !!state.user.id;

      let localStorageCart = localStorage.getItem('guestCart')
        ? JSON.parse(localStorage.getItem('guestCart'))
        : [];

      if (!isAuthenticated) {
        // unauthenticated user
        return store.dispatch(requestCart(localStorageCart));
      } else {
        // authenticated user
        if (localStorageCart.length > 0) {
          localStorageCart.forEach(product => {
            store.dispatch(createCartItem(state.user.id, product.id));
          });
          localStorageCart = [];
          localStorage.setItem('cart', JSON.stringify([]));
        }
        return store.dispatch(fetchCart(state.user.id));
      }
    }

    // Call the next dispatch method in the middleware chain.
    let returnValue = next(action);

    // This will likely be the action itself, unless
    // a middleware further in chain changed it.
    return returnValue;
  };
}
