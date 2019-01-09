import React from 'react';
import { connect } from 'react-redux';

const Cart = ({ products }) => {
  return (
    <div>
      <p>Cart component</p>
    </div>
  );
};

const mapState = state => ({
  products: state.cart.products
});

export default connect(mapState)(Cart);
