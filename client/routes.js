import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Route, Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Login,
  Signup,
  UserHome,
  ProductList,
  SingleProduct,
  SingleOrder,
  OrderList,
  CheckoutPage,
  Admin
} from './components';
import {
  me,
  fetchProducts,
  fetchStorageData,
  createCartItem,
  requestCart,
  fetchCart
} from './store';
import AdminManageRoutes from './components/AdminManageRoutes';

/**
 * COMPONENT
 */
class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();

    if (!this.props.user.id) {
      let data = JSON.parse(window.localStorage.getItem('guestCart'));
    } else {
      this.props.fetchCart(this.props.user.id);
      // data.forEach(product =>  createCartItem())
    }
  }

  render() {
    const { isLoggedIn } = this.props;

    return (
      <Switch>
        {/* Routes placed here are available to all visitors */}
        <Route exact path="/" component={ProductList} />
        <Route exact path="/products/:id" component={SingleProduct} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/checkout" component={CheckoutPage} />
        {isLoggedIn && (
          <Switch>
            {/* Routes placed here are only available after logging in */}
            <Route path="/home" component={UserHome} />
            <Route exact path="/orders/:userId" component={OrderList} />
            <Route exact path="/order/:orderId" component={SingleOrder} />
          </Switch>
        )}
        {/* Displays our ProductList component as a fallback */}
        <AdminManageRoutes />
      </Switch>
    );
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    // Being 'logged in' for our purposes will be defined has having a state.user that has a truthy id.
    // Otherwise, state.user will be an empty object, and state.user.id will be falsey
    user: state.user,
    isLoggedIn: !!state.user.id,
    products: state.products,
    guestCart: state.guestCart.cart
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
      dispatch(fetchProducts());
      dispatch(fetchStorageData());
    }
  };
};

// The `withRouter` wrapper makes sure that updates are not blocked
// when the url changes
export default withRouter(connect(mapState, mapDispatch)(Routes));

/**
 * PROP TYPES
 */
Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
