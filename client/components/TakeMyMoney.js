import React, { Component } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { connect } from 'react-redux';
import axios from 'axios';
import { checkout } from '../store/order';
import formatMoney from '../../lib/formatMoney';
import calcTotalPrice from '../../lib/calcTotalPrice';

class TakeMyMoney extends Component {
  onToken = async token => {
    try {
      await axios.post('/api/checkout/', {
        total: calcTotalPrice(this.props.products),
        token
      });
      await this.props.checkout(this.props.user.id, this.props.shippingInfo);
    } catch (err) {
      console.error(err);
    }
  };

  render() {
    return (
      <StripeCheckout
        stripeKey="pk_test_0fuF1ykOy2R8WCu0NY2ephSJ"
        token={this.onToken}
        amount={Number(formatMoney(calcTotalPrice(this.props.products)))}
      />
    );
  }
}

const mapState = state => ({
  shippingInfo: state.order.shippingInfo,
  products: state.cart.products,
  user: state.user
});

const mapDispatch = dispatch => ({
  checkout: (userId, shippingInfo) => dispatch(checkout(userId, shippingInfo))
});

export default connect(mapState, mapDispatch)(TakeMyMoney);
