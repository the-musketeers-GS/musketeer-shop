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
  checkLocalStorage
} from '../store/cart';
import { checkout } from '../store/order';
import CartStyles from './styles/CartStyles';
import GuestCart from './GuestCart';

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
  render() {
    let { products, guestCart, isOpen, user } = this.props;
    let localStorageCart = JSON.parse(window.localStorage.getItem('guestCart'));

    if (!user.id && localStorageCart) {
      return (
        <GuestCart
          products={guestCart}
          isOpen={isOpen}
          toggleCart={this.props.toggleCart}
        />
      );
    } else {
      products = products || [];
      const userId = this.props.user.id;
      return (
        <CartStyles open={this.props.isOpen}>
          <>
            <header>
              Your Cart
              <CloseButton onClick={this.props.toggleCart}>&times;</CloseButton>
            </header>
            {!products.length ? (
              <CartItemStyles>No items in your cart ☹️</CartItemStyles>
            ) : (
              <ul>
                {products.map(item => (
                  <CartItemStyles key={item.product.id}>
                    <img
                      width="100"
                      src={item.product.image}
                      alt={item.product.title}
                    />
                    <div>
                      <h3>{item.product.title}</h3>
                      <p>
                        {formatMoney(item.product.price)} | qty: {item.quantity}{' '}
                        | total:{' '}
                        {formatMoney(item.quantity * item.product.price)}
                      </p>
                    </div>
                    <BigButton
                      onClick={() =>
                        this.props.deleteCartItem(userId, item.product.id)
                      }
                    >
                      &times;
                    </BigButton>
                  </CartItemStyles>
                ))}
              </ul>
            )}
            <footer>
              <p>{formatMoney(calcTotalPrice(products))}</p>
              <Link
                to="/checkout"
                onClick={async () => {
                  // await this.props.checkout(userId);
                  await this.props.toggleCart();
                  await this.props.getCart(userId);
                }}
              >
                <CheckoutButton disabled={!products.length}>
                  Checkout
                </CheckoutButton>
              </Link>
            </footer>
          </>
        </CartStyles>
      );
    }
  }
}

const mapState = state => ({
  products: state.cart.products,
  isOpen: state.cart.isOpen,
  user: state.user,
  isLoggedIn: state.isLoggedIn,
  guestCart: state.guestCart.cart
});

const mapDispatch = dispatch => ({
  fetchCart: userId => dispatch(fetchCart(userId)),
  toggleCart: () => dispatch(toggleCart()),
  createCartItem: (id, product) => dispatch(createCartItem(id, product)),
  deleteCartItem: (userId, productId) =>
    dispatch(deleteCartItem(userId, productId)),
  checkout: userId => dispatch(checkout(userId)),
  checkLocalStorage: () => dispatch(checkLocalStorage())
});

export default connect(mapState, mapDispatch)(Cart);
