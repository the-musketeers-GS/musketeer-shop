import React from 'react';
import { connect } from 'react-redux';
import { createCartItem } from '../store/cart';

const AddToCart = ({ addToCart, productId }) => (
  <div>
    <button
      type="button"
      onClick={() => {
        // 4 needs to be changed to userId when we have user on state
        addToCart(4, productId);
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
