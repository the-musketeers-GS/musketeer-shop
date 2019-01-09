import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCart } from '../store/cart';

class Cart extends Component {
  componentDidMount() {
    this.props.getCart(1);
  }

  render() {
    const products = this.props.products || [];
    console.log('>>>', products);
    return (
      <div>
        <ul>
          {products.map(item => (
            <li key={item.product.id}>{item.product.title}</li>
          ))}
        </ul>
      </div>
    );
  }
}

const mapState = state => ({ products: state.cart.products });

const mapDispatch = dispatch => ({
  getCart: userId => dispatch(fetchCart(userId))
});

export default connect(mapState, mapDispatch)(Cart);
