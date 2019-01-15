import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import { checkout } from '../store/order';

// class TakeMyMoney extends Component {
//   onToken = token => {
//     this.props.checkout()
//   }
// }

const mapState = state => ({
  newtoken: state.order.shippingInfo.token
});

const mapDispatch = dispatch => ({
  checkout: userId => dispatch(checkout(userId))
});

export default connect(null, mapDispatch)(TakeMyMoney);
