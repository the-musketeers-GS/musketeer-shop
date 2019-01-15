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
  requestCart
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
  constructor() {
    super();

    this.state = {
      products: []
      // quantity: 0,
    };
  }
  componentDidMount() {
    if (!this.props.user.id) {
      let guestCart = JSON.parse(localStorage.getItem('guestCart'));
      this.setState({
        products: guestCart.cart
      });
    } else {
      this.props.getCart(this.props.user.id);
      this.setState({ products: this.props.cart });
    }
  }

  render() {
    // let cartProducts = this.props.cart.products.cart || [];
    // let products = this.props.products || [];
    // let productsInCart = [];
    // if (cartProducts.length && products.length) {
    //   console.log('reached this js');
    //   cartProducts.forEach(item => {
    //     productsInCart.push(products.filter(product => product.id === item.id));
    //   });
    // }
    // console.log('this.props.products', this.props.products);
    // console.log(
    //   'what is in the cart.products.cart?',
    //   this.props.cart.products.cart
    // );
    // console.log('productsInCart >>>>>', productsInCart);

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
              {productsInCart.map(product =>
                product.map(item => (
                  <CartItemStyles key={item.id}>
                    <img width="100" src={item.image} alt={item.title} />
                    <div>
                      <h3>{item.title}</h3>
                      {/* <p>
                      {formatMoney(item.product.price)} | qty: {item.quantity} |
                      total: {formatMoney(item.quantity * item.product.price)}
                    </p> */}
                    </div>
                    <BigButton
                      onClick={() => this.props.guestRemoveCartItem(item.id)}
                    >
                      &times;
                    </BigButton>
                  </CartItemStyles>
                ))
              )}
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

const mapDispatch = dispatch => ({
  getCart: userId => dispatch(fetchCart(userId)),
  toggleCart: () => dispatch(toggleCart()),
  deleteCartItem: (userId, productId) =>
    dispatch(deleteCartItem(userId, productId)),
  checkout: userId => dispatch(checkout(userId)),
  requestCart,
  guestRemoveCartItem: id => dispatch(guestRemoveCartItem(id))
});

export default connect(mapState, mapDispatch)(Cart);
