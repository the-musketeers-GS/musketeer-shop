import React from 'react';
import { connect } from 'react-redux';

const AddToCart = ({
  product,
  handleAdd,
  handleAddNoUser,
  user,
  isLoggedIn
}) => (
  <div>
    <button
      type="button"
      onClick={e => {
        e.preventDefault();
        user.id ? handleAdd(user.id, product.id) : handleAddNoUser(product);
      }}
    >
      Add To Cart
    </button>
  </div>
);

const mapState = state => ({
  // isLoading: state.cart.isLoading,
  user: state.user
});

export default connect(mapState)(AddToCart);
