import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import history from '../history';

import { toggleCart, guestRemoveCartItem } from '../store';

import formatMoney from '../../lib/formatMoney';
import calcTotalPriceGuest from '../../lib/calcTotalPriceGuest';

import styled from 'styled-components';
import CartStyles from './styles/CartStyles';

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
  const guestCart = JSON.parse(window.localStorage.getItem('guestCart'));
  const products = guestCart.cart || [];

  return (
    <CartStyles open={props.isOpen}>
      <>
        <header>
          Your Cart
          <CloseButton onClick={props.toggleCart}>&times;</CloseButton>
        </header>
        {
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
                <BigButton
                  onClick={() => props.guestRemoveCartItem(product.id)}
                >
                  &times;
                </BigButton>
              </CartItemStyles>
            ))}
          </ul>
        }
        <footer>
          <p>{formatMoney(calcTotalPriceGuest(products))}</p>
          <CheckoutButton
            onClick={() => {
              alert('Please Login/Signup to continue..');
              history.push('/login');
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

const mapState = state => ({
  isOpen: state.cart.isOpen
});

const mapDispatch = { toggleCart, guestRemoveCartItem };

export default withRouter(connect(mapState, mapDispatch)(GuestCart));
