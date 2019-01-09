import axios from 'axios';
/**
 * ACTION TYPES
 */
const GET_PRODUCT = 'GET_PRODUCT';

/**
 * INITIAL STATE
 */
const products = [];

/**
 * ACTION CREATORS
 */
const getProducts = product => ({ type: GET_PRODUCT, product });

/**
 * THUNK CREATORS
 */
export const fetchProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products');
    dispatch(getProducts(res.data || products));
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function(state = products, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.product;
    default:
      return state;
  }
}
