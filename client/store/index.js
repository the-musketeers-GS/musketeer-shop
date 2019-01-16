import { createStore, combineReducers, applyMiddleware } from 'redux';
import createLogger from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import user from './user';
import cart from './cart';
import { localCartMiddleware } from './cart';
import products from './product';
import review from './review';
import order from './order';
import guestCart from './guestCart';
import users from './admin';

const reducer = combineReducers({
  user,
  cart,
  products,
  review,
  order,
  guestCart,
  users
});

const middleware = composeWithDevTools(
  applyMiddleware(
    thunkMiddleware,
    localCartMiddleware,
    createLogger({ collapsed: true })
  )
);
const store = createStore(reducer, middleware);

export default store;
export * from './user';
export * from './product';
export * from './cart';
export * from './order';
export * from './guestCart';
export * from './admin';
