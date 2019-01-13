import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchCart, toggleCart, deleteCartItem } from '../store/cart';
import formatMoney from '../../lib/formatMoney';
import calcTotalPrice from '../../lib/calcTotalPrice';
import CartStyles from './styles/CartStyles';
import { checkout } from '../store/order';

const CloseButton = styled.button`
  background: black;
  color: white;
  font-size: 2rem;
  border: 0;
  position: absolute;
  z-index: 2;
  right: 0;
`;

const CartItemStyles = styled.li`
  padding: 1rem 0;
  border-bottom: 1px solid ${props => props.theme.lightgray};
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr auto;
  img {
    margin-right: 10px;
  }
  h3,
  p {
    margin: 0;
  }
`;

const BigButton = styled.button`
  font-size: 3rem;
  background: none;
  border: 0;
  &:hover {
    color: red;
    cursor: pointer;
  }
`;

const CheckoutButton = styled.button`
  background: none;
  border: 0;
  font-size: 3rem;
`;

const GuestCart = props => {
  // const { products } = props
  const guestCart = JSON.parse(window.localStorage.getItem('guestCart'));
  const products = guestCart.cart || [];

  return (
    <CartStyles open={props.isOpen}>
      <>
        <header>
          Your Cart
          <CloseButton onClick={props.toggleCart}>&times;</CloseButton>
        </header>
        {products.length && (
          <ul>
            {products.map(product => (
              <CartItemStyles key={product.id}>
                <img width="100" src={product.image} alt={product.title} />
                <div>
                  <h3>{product.title}</h3>
                  <p>
                    {formatMoney(product.price)} | qty: {product.quantity} |
                    total: {formatMoney(product.quantity * product.price)}
                  </p>
                </div>
                {/* <BigButton
                    onClick={() =>
                      this.props.deleteCartItem(this.props.user.id, product.id)
                    }
                  >
                    &times;
                  </BigButton> */}
              </CartItemStyles>
            ))}
          </ul>
        )}
        <footer>
          {/* <p>{formatMoney(calcTotalPrice(products))}</p> */}
          <CheckoutButton
            onClick={async () => {
              await props.checkout(userId);
              await props.toggleCart();
              await props.getCart(userId);
            }}
            disabled={!products.length}
          >
            Checkout
          </CheckoutButton>
        </footer>
      </>
    </CartStyles>
  );
};

// const mapState = state => ({
//   isOpen: state.cart.isOpen,
//   guestCart: state.guestCart.cart
// });

// const mapDispatch = dispatch => ({
//   toggleCart: () => dispatch(toggleCart()),
//   checkout: userId => dispatch(checkout(userId))
// });

// export default connect(mapState, mapDispatch)(GuestCart);

export default GuestCart;
