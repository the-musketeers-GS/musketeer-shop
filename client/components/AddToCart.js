import React from 'react';
import { connect } from 'react-redux';
import AddedToCartSnackbar from './AddedToCartSnackbar';
import { toggleSnackbar } from '../store/cart';

const AddToCart = ({
  product,
  handleAdd,
  handleAddNoUser,
  user,
  toggle,
  isLoggedIn
}) => (
  <div>
    <button
      type="button"
      onClick={e => {
        e.preventDefault();
        toggle();
        user.id ? handleAdd(user.id, product.id) : handleAddNoUser(product);
      }}
    >
      Add To Cart
    </button>
    <AddedToCartSnackbar />
  </div>
);

const mapState = state => ({
  // isLoading: state.cart.isLoading,
  user: state.user
});

const mapDispatch = dispatch => ({
  toggle: () => dispatch(toggleSnackbar())
});

export default connect(mapState, mapDispatch)(AddToCart);
