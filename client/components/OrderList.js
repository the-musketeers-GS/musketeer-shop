import React, { Component } from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { formatDistance } from 'date-fns';
import OrderItemStyles from './styles/OrderItemStyles';
import { fetchAllOrders } from '../store';
import formatMoney from '../../lib/formatMoney';
import orderStatus from '../../lib/orderStatus';

const OrderUl = styled.ul`
  display: grid;
  grid-gap: 4rem;
  grid-template-rows: repeat(auto-fit, minmax(40%, 1fr));
`;

class OrderList extends Component {
  componentDidMount() {
    console.log('GOT HERE, SOMEHOW?');
    this.props.getAllOrders(this.props.match.params.userId);
  }

  render() {
    const orders = this.props.orders || [];

    if (!orders.length) {
      return (
        <OrderUl>
          <OrderItemStyles>Thou hast no orders ☹️</OrderItemStyles>
        </OrderUl>
      );
    }
    return (
      <div>
        <h2>You have {orders.length} orders!</h2>
        <OrderUl>
          {orders.map(order => (
            <OrderItemStyles key={order.id}>
              <Link to={`/order/${order.id}`}>
                <div className="order-meta">
                  <p>Order ID: AFG3ZSG89HL{order.id}</p>
                  <p>
                    {order.orderItems.reduce((a, b) => a + b.quantity, 0)} Items
                  </p>
                  <p>{order.orderItems.length} Products</p>
                  <p>{orderStatus(order.status)}</p>
                  <p>{formatDistance(order.createdAt, Date.now())}</p>
                  <p>{formatMoney(order.total)}</p>
                </div>
                <div className="images">
                  {order.orderItems.map(item => (
                    <img key={item.id} src={item.image} alt={item.title} />
                  ))}
                </div>
              </Link>
            </OrderItemStyles>
          ))}
        </OrderUl>
      </div>
    );
  }
}

const mapState = state => ({
  orders: state.order.allOrders
});

const mapDispatch = dispatch => ({
  getAllOrders: userId => dispatch(fetchAllOrders(userId))
});

export default connect(mapState, mapDispatch)(OrderList);

OrderList.propTypes = {
  orders: PropTypes.array
};
