import axios from 'axios';

// INITIAL STATE
const initialState = {
  products: []
};

// ACTION TYPES
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';

// ACTION CREATORS
const addToCart = product => ({
  type: ADD_TO_CART,
  product
});
const removeFromCart = productId => ({
  type: REMOVE_FROM_CART,
  productId
});
const increaseQuantity = productId => ({
  type: INCREASE_QUANTITY,
  productId
});

// THUNK CREATORS
export const thunkAddToCart = productId => async dispatch => {
  try {
    const { data } = await axios.post('/api/cart', { productId });
    dispatch(addToCart(data));
  } catch (err) {
    console.error(err);
  }
};
export const thunkRemoveFromCart = productId => async dispatch => {
  try {
    await axios.delete(`/api/cart/:${productId}`);
    dispatch(removeFromCart(productId));
  } catch (err) {
    console.error(err);
  }
};
export const thunkUpdateProductInCart = productId => async dispatch => {
  try {
    await axios.put(`/api/cart/increase:${productId}`);
    dispatch(increaseQuantity(productId));
  } catch (err) {
    console.error(err);
  }
};
// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      return { ...state, products: [...state.products, action.product] };
    case REMOVE_FROM_CART:
      return {
        ...state,
        products: state.products.filter(
          product => product.id !== action.productId
        )
      };
    case INCREASE_QUANTITY:
      return state;
    default:
      return state;
  }
}
