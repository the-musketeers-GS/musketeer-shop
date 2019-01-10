import axios from 'axios';
/**
 * ACTION TYPES
 */
const GET_PRODUCT = 'GET_PRODUCT';

/**
 * INITIAL STATE
 */
const initialProducts = [];

/**
 * ACTION CREATORS
 */
const getProducts = products => ({ type: GET_PRODUCT, products });

/**
 * THUNK CREATORS
 */
export const fetchProducts = () => async dispatch => {
  try {
    const res = await axios.get('/api/products');
    dispatch(getProducts(res.data || initialProducts));
  } catch (err) {
    console.error(err);
  }
};

/**
 * REDUCER
 */
export default function(state = initialProducts, action) {
  switch (action.type) {
    case GET_PRODUCT:
      return action.products;
    default:
      return state;
  }
}
