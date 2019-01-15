import axios from 'axios';

// ACTION TYPES
// const REQUEST_MADE = 'REQUEST_MADE';
const REQUEST_CART = 'REQUEST_CART';
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
