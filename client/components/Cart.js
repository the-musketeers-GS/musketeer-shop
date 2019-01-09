import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Image, List } from 'semantic-ui-react';
import { fetchCart } from '../store/cart';
import formatMoney from '../../lib/formatMoney';

class Cart extends Component {
  componentDidMount() {
    this.props.getCart(1);
  }
  render() {
    const products = this.props.products || [];
    console.log('>>>', products);
    return (
      <List celled>
        {products.map(item => (
          <List.Item key={item.product.id}>
            <List.Content>
              <List.Header>{item.product.title}</List.Header>
              {formatMoney(item.product.price)}
            </List.Content>
          </List.Item>
        ))}
      </List>
    );
  }
}

const mapState = state => ({ products: state.cart.products });

const mapDispatch = dispatch => ({
  getCart: userId => dispatch(fetchCart(userId))
});

export default connect(mapState, mapDispatch)(Cart);
