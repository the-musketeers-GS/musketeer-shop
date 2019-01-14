import React from 'react';
import { connect } from 'react-redux';
import { createCartItem } from '../store/cart';

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
        // 1 needs to be changed to userId when we have user on state
        isLoggedIn ? handleAdd(user.id, product.id) : handleAddNoUser(product);
      }}
    >
      Add To Cart
    </button>
  </div>
);

export default AddToCart;
