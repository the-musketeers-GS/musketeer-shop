import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import formatMoney from '../../lib/formatMoney';
import calcTotalPrice from '../../lib/calcTotalPrice';
import {
  fetchCart,
  toggleCart,
  deleteCartItem,
  createCartItem,
  requestCart,
  checkLocalStorage,
  me
} from '../store/cart';
import { checkout } from '../store/order';
import CartStyles from './styles/CartStyles';
import GuestCart from './GuestCart';
import { guestRemoveCartItem } from '../store';

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
  border-bottom: 1px solid lightgray;
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

class Cart extends Component {
  componentDidMount() {
    let localStorageCart = JSON.parse(window.localStorage.getItem('guestCart'));
    console.log('localStorageCart', localStorageCart);
    console.log('am i here?', this.props.user.id);
    if (this.props.user.id) {
      if (localStorageCart.cart.length) {
        localStorageCart.cart.forEach(async product => {
          await createCartItem(this.props.user.id, product.id);
        });
      }
      this.props.fetchCart(this.props.user.id);
    }
  }

  render() {
    let productsInCart = [];
    if (this.props.user.id) {
      productsInCart = this.props.cart.products.map(item => item.product);
    } else {
      let localStorageCart = JSON.parse(
        window.localStorage.getItem('guestCart')
      );
      if (localStorageCart) {
        productsInCart = localStorageCart;
      }
    }

    return (
      <CartStyles open={this.props.isOpen}>
        <>
          <header>
            Your Cart
            <CloseButton onClick={toggleCart}>&times;</CloseButton>
          </header>
          {!productsInCart.length ? (
            <CartItemStyles>No items in your cart ☹️</CartItemStyles>
          ) : (
            <ul>
              {productsInCart.map(item => (
                <CartItemStyles key={item.id}>
                  <img width="100" src={item.image} alt={item.title} />
                  <div>
                    <h3>{item.title}</h3>
                    }
                    {/* <p>
                    {formatMoney(item.price)} | qty: {item.quantity} |
                    total: {formatMoney(item.quantity * item.price)}
                  </p> */}
                  </div>
                  <BigButton
                    onClick={() =>
                      this.props.deleteCartItem(this.props.user.id, item.id)
                    }
                  >
                    &times;
                  </BigButton>
                </CartItemStyles>
              ))}
            </ul>
          )}
          {/* <footer>
            <p>{formatMoney(calcTotalPrice(productsInCart))}</p>
            <CheckoutButton
              onClick={async () => {
                await this.props.checkout(userId);
                await this.props.toggleCart();
                await this.props.getCart(userId);
              }}
              disabled={!products.length}
            >
              Checkout
            </CheckoutButton>
          </footer> */}
        </>
      </CartStyles>
    );
  }
}

const mapState = state => ({
  cart: state.cart,
  isOpen: state.cart.isOpen,
  products: state.products,
  user: state.user,
  isLoggedIn: state.isLoggedIn,
  guestCart: state.guestCart.cart
});

const mapDispatch = {
  fetchCart,
  toggleCart,
  deleteCartItem,
  checkout,
  requestCart,
  checkLocalStorage,
  me
};

export default connect(mapState, mapDispatch)(Cart);
