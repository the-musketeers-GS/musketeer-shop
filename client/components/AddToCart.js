import React from 'react';
import { connect } from 'react-redux';
import { createCartItem } from '../store/cart';

const AddToCart = ({
  addToCart,
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
        isLoggedIn
          ? handleAdd(user.id, product.id)
          : handleAddNoUser(product.id);
      }}
    >
      Add To Cart
    </button>
  </div>
);

// const mapState = state => ({
//   user: state.user
// })

// const mapDispatch = dispatch => ({
//   addToCart: (userId, productId) => dispatch(createCartItem(userId, productId))
// });

// export default connect(mapState, mapDispatch)(AddToCart);

export default AddToCart;
