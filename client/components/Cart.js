import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchCart, toggleCart, deleteCartItem } from '../store/cart';
import formatMoney from '../../lib/formatMoney';
import calcTotalPrice from '../../lib/calcTotalPrice';
import CartStyles from './styles/CartStyles';
import { checkout } from '../store/order';
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

class Cart extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) {
      this.props.getCart(this.props.user.id);
    }
  }

  render() {
    let { products, isLoggedIn, guestCart, isOpen, toggleCart } = this.props;
    if (!isLoggedIn && guestCart.length) {
      return (
        <GuestCart
          products={guestCart}
          isOpen={isOpen}
          toggleCart={toggleCart}
        />
      );
    } else {
      return (
        <CartStyles open={this.props.isOpen}>
          <>
            <header>
              Your Cart
              <CloseButton onClick={this.props.toggleCart}>&times;</CloseButton>
            </header>
            {products.length && (
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
                        this.props.deleteCartItem(
                          this.props.user.id,
                          item.product.id
                        )
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
  getCart: userId => dispatch(fetchCart(userId)),
  toggleCart: () => dispatch(toggleCart()),
  deleteCartItem: (userId, productId) =>
    dispatch(deleteCartItem(userId, productId)),
  checkout: userId => dispatch(checkout(userId))
});

export default connect(mapState, mapDispatch)(Cart);
