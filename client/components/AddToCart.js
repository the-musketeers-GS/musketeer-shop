import React from 'react';
import { connect } from 'react-redux';

const AddToCart = ({
  product,
  handleAdd,
  handleAddNoUser,
  user,
  isLoggedIn,
  isLoading
}) => (
  <div>
    <button
      type="button"
      onClick={e => {
        e.preventDefault();
        // 1 needs to be changed to userId when we have user on state
        isLoggedIn ? handleAdd(user.id, product.id) : handleAddNoUser(product);
      }}
    >
      Add{isLoading ? 'ing' : ''} To Cart
    </button>
  </div>
);

const mapState = state => ({
  isLoading: state.cart.isLoading,
  user: state.user
});

export default connect(mapState)(AddToCart);
