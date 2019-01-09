import axios from 'axios';

// ACTION TYPES
const REQUEST_CART = 'REQUEST_CART';
const ADD_TO_CART = 'ADD_TO_CART';
const REMOVE_FROM_CART = 'REMOVE_FROM_CART';
const INCREASE_QUANTITY = 'INCREASE_QUANTITY';

// ACTION CREATORS
const requestCart = products => ({
  type: REQUEST_CART,
  products
});
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
export const fetchCart = cartId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/cart/${cartId}/items`);
    dispatch(requestCart(data || []));
  } catch (err) {
    console.error(err);
  }
};
export const createCartItem = productId => async dispatch => {
  try {
    const { data } = await axios.post('/api/cart', { productId });
    dispatch(addToCart(data));
  } catch (err) {
    console.error(err);
  }
};
export const deleteCartItem = productId => async dispatch => {
  try {
    await axios.delete(`/api/cart/:${productId}`);
    dispatch(removeFromCart(productId));
  } catch (err) {
    console.error(err);
  }
};
export const updateCartItem = productId => async dispatch => {
  try {
    await axios.put(`/api/cart/increase:${productId}`);
    dispatch(increaseQuantity(productId));
  } catch (err) {
    console.error(err);
  }
};

// INITIAL STATE
const initialState = {
  products: []
};

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_CART:
      return { ...state, products: action.products };
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
