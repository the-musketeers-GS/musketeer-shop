import axios from 'axios';

// ACTION TYPES
// const REQUEST_MADE = 'REQUEST_MADE';
const REQUEST_CART = 'REQUEST_CART';
const CHECK_LOCALSTORAGE = 'CHECK_LOCALSTORAGE';
const TOGGLE_CART = 'TOGGLE_CART';
const TOGGLE_SNACKBAR = 'TOGGLE_SNACKBAR';

// ACTION CREATORS
// export const requestMade = () => ({
//   type: REQUEST_MADE
// });
export const requestCart = products => ({
  type: REQUEST_CART,
  products
});

export const checkLocalStorage = () => ({
  type: CHECK_LOCALSTORAGE
});
export const toggleCart = () => ({
  type: TOGGLE_CART
});
export const toggleSnackbar = () => ({
  type: TOGGLE_SNACKBAR
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
  console.log('userid', userId);
  console.log('productid', productId);
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
  isOpen: false,
  snackbarOpen: false
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
    case TOGGLE_SNACKBAR:
      return { ...state, snackbarOpen: !state.snackbarOpen };
    default:
      return state;
  }
}

export function localCartMiddleware(store) {
  return next => action => {
    if (action.type === CHECK_LOCALSTORAGE) {
      let state = store.getState();
      const isAuthenticated = !!state.user.id;
      console.log(state);

      let localStorageCart = localStorage.getItem('guestCart')
        ? JSON.parse(localStorage.getItem('guestCart'))
        : [];

      if (isAuthenticated) {
        console.log('HERE??????');
        // authenticated user
        if (localStorageCart.cart) {
          localStorageCart.cart.forEach(item => {
            store.dispatch(createCartItem(state.user.id, item.id));
          });
          localStorageCart = [];
          localStorage.setItem('guestCart', JSON.stringify([]));
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
