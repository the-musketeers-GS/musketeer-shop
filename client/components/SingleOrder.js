import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSingleOrder } from '../store';
import formatMoney from '../../lib/formatMoney';
import OrderStyles from './styles/OrderStyles';
import orderStatus from '../../lib/orderStatus';

class SingleOrder extends Component {
  componentDidMount() {
    const orderId = this.props.match.params.orderId;
    const userId = this.props.match.params.userId;
    this.props.getOrder(orderId, userId);
  }
  render() {
    const orderData = this.props.orderData || {};
    const orderItems = this.props.orderItems || [];
    const isLoggedIn = this.props.isLoggedIn || false;
    if (!orderData.id || !orderItems.length) {
      return (
        <OrderStyles>
          <p>No order information</p>
        </OrderStyles>
      );
    } else if (!isLoggedIn) {
      return null;
    } else {
      return (
        <OrderStyles>
          <p>
            <span>Order ID: </span>
            <span>{orderData.id}</span>
          </p>
          <p>
            <span>Total: </span>
            <span>{formatMoney(orderData.total)}</span>
          </p>
          <p>
            <span>Status: </span>
            <span>{orderStatus(orderData.status)}</span>
          </p>
          <div className="items">
            {orderItems.map(item => (
              <div key={item.id} className="order-item">
                <img src={item.image} alt={item.title} />
                <div className="item-details">
                  <h2>{item.title}</h2>
                  <p>Quantity: {item.quantity}</p>
                  <p>Each: {formatMoney(item.price)}</p>
                  <p>SubTotal: {formatMoney(item.price * item.quantity)}</p>
                </div>
              </div>
            ))}
          </div>
        </OrderStyles>
      );
    }
  }
}

const mapState = state => ({
  orderData: state.order.currentOrder.order,
  orderItems: state.order.currentOrder.products,
  isLoggedIn: !!state.user.id
});

const mapDispatch = dispatch => ({
  getOrder: (orderId, userId) => dispatch(fetchSingleOrder(orderId, userId))
});

export default connect(mapState, mapDispatch)(SingleOrder);
