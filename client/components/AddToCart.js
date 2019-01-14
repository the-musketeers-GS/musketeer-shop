import React from 'react';
import { connect } from 'react-redux';
import { createCartItem } from '../store/cart';

const AddToCart = ({ addToCart, productId, user, isLoading }) => {
  // this is for testing purposes only
  const userId = user.id || 4;
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          addToCart(userId, productId);
        }}
      >
        Add{isLoading ? 'ing' : ''} To Cart
      </button>
    </div>
  );
};

const mapState = state => ({
  isLoading: state.cart.isLoading,
  user: state.user
});

const mapDispatch = dispatch => ({
  addToCart: (userId, productId) => dispatch(createCartItem(userId, productId))
});

export default connect(mapState, mapDispatch)(AddToCart);
