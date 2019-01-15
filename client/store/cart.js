import axios from 'axios';

// ACTION TYPES
const REQUEST_MADE = 'REQUEST_MADE';
const REQUEST_CART = 'REQUEST_CART';
const TOGGLE_CART = 'TOGGLE_CART';

// ACTION CREATORS
export const requestMade = () => ({
  type: REQUEST_MADE
});
export const requestCart = products => ({
  type: REQUEST_CART,
  products
});
export const toggleCart = () => ({
  type: TOGGLE_CART
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
  dispatch(requestMade());
  try {
    await axios.post(`/api/cart/${userId}/${productId}`);
    dispatch(fetchCart(userId));
  } catch (err) {
    console.error(err);
  }
};
export const deleteCartItem = (userId, productId) => async dispatch => {
  dispatch(requestMade());
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
  isLoading: false
};

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_MADE: {
      return { ...state, isLoading: true };
    }
    case REQUEST_CART:
      return { ...state, products: action.products, isLoading: false };
    case TOGGLE_CART:
      return { ...state, isOpen: !state.isOpen };
    default:
      return state;
  }
}
