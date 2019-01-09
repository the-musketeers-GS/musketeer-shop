import React from 'react';
import { connect } from 'react-redux';
import { createCartItem } from '../store/cart';

const userId = 1;

const AddToCart = ({ addToCart, productId }) => (
  <div>
    <button
      type="button"
      onClick={() => {
        addToCart(userId, productId);
      }}
    >
      Add To Cart
    </button>
  </div>
);

const mapDispatch = dispatch => ({
  addToCart: (userId, productId) => dispatch(createCartItem(userId, productId))
});

export default connect(null, mapDispatch)(AddToCart);
