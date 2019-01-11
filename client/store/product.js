import axios from 'axios';
/**
 * ACTION TYPES
 */
const GET_PRODUCT = 'GET_PRODUCT';
const DELETE_PRODUCT = 'DELETE_PRODUCT';
const UPDATE_PRODUCT = 'UPDATE_PRODUCT';

/**
 * INITIAL STATE
 */
const initialProducts = [];

/**
 * ACTION CREATORS
 */
const getProducts = products => ({ type: GET_PRODUCT, products });
// const updateProduct = product => ({ type: UPDATE_PRODUCT, product });
const deleteProduct = id => ({ type: DELETE_PRODUCT, id });

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

export const updateThunkProduct = (id, product) => async dispatch => {
  try {
    const res = await axios.put(`/api/manage/product/${id}`, product);
    // dispatch(getProducts(res.data));
    console.log('res.data>>>>> ', res.data);
  } catch (err) {
    console.error(err);
  }
};

export const deleteThunkProduct = product => async dispatch => {
  try {
    const { data } = await axios.delete(`/api/manage/product/${product.id}`);
    dispatch(deleteProduct(data));
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
    // case UPDATE_PRODUCT:
    //   return state.map(product => {
    //     if (product.id === action.product.id) {
    //       product = action.product
    //     }
    //   })
    case DELETE_PRODUCT:
      return [...state].filter(product => product.id !== action.id);
    default:
      return state;
  }
}
