import axios from 'axios';
import history from '../history';

// ACTION TYPES
const REQUEST_SINGLE_ORDER = 'REQUEST_SINGLE_ORDER';
const REQUEST_ALL_ORDERS = 'REQUEST_ALL_ORDERS';

// ACTION CREATORS
const requestOrder = order => ({
  type: REQUEST_SINGLE_ORDER,
  order
});
const requestAllOrders = orders => ({
  type: REQUEST_ALL_ORDERS,
  orders
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
  shippingInfo: {}
};

// REDUCER
export default function(state = initialState, action) {
  switch (action.type) {
    case REQUEST_SINGLE_ORDER:
      return { ...state, currentOrder: action.order };
    case REQUEST_ALL_ORDERS:
      return { ...state, allOrders: action.orders };
    default:
      return state;
  }
}
