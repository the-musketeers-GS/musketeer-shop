import axios from 'axios';
import history from '../history';

// ACTION TYPES
const REQUEST_SINGLE_ORDER = 'REQUEST_SINGLE_ORDER';
const REQUEST_ALL_ORDERS = 'REQUEST_ALL_ORDERS';
const ADD_SHIPPING_INFO = 'ADD_SHIPPING_INFO';

// ACTION CREATORS
const requestOrder = order => ({
  type: REQUEST_SINGLE_ORDER,
  order
});
const requestAllOrders = orders => ({
  type: REQUEST_ALL_ORDERS,
  orders
});
export const addShippingInfo = (field, value) => ({
  type: ADD_SHIPPING_INFO,
  field,
  value
});

// THUNK CREATORS
export const fetchSingleOrder = orderId => async dispatch => {
  try {
    const { data } = await axios.get(`/api/order/${orderId}/data`);
    dispatch(requestOrder(data));
  } catch (err) {
    console.error(err);
  }
};
export const fetchAllOrders = userId => async dispatch => {
  try {
    const { data: orders } = await axios.get(`/api/order/${userId}`);
    dispatch(requestAllOrders(orders));
  } catch (err) {
    console.error(err);
  }
};
export const checkout = (userId, shippingInfo) => async dispatch => {
  try {
    const { data: orderId } = await axios.post(
      `/api/order/${userId}`,
      shippingInfo
    );
    history.push(`/order/${orderId}`);
    dispatch(fetchSingleOrder(orderId));
  } catch (err) {
    console.error(err);
  }
};

// INITIAL STATE
const initialState = {
  allOrders: [],
  currentOrder: {},
  shippingInfo: {
    firstName: '',
    lastName: '',
    address1: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
    country: '',
    token: ''
  }
};

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SINGLE_ORDER:
      return { ...state, currentOrder: action.order };
    case REQUEST_ALL_ORDERS:
      return { ...state, allOrders: action.orders };
    case ADD_SHIPPING_INFO:
      return {
        ...state,
        shippingInfo: {
          ...state.shippingInfo,
          [action.field]: action.value
        }
      };
    default:
      return state;
  }
}
