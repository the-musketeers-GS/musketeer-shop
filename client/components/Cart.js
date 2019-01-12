import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { fetchCart, toggleCart, deleteCartItem } from '../store/cart';
import formatMoney from '../../lib/formatMoney';
import calcTotalPrice from '../../lib/calcTotalPrice';
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

class Cart extends Component {
  componentDidMount() {
    if (this.props.isLoggedIn) this.props.getCart(this.props.user.id);
  }

  render() {
    const products = this.props.products || [];
    return (
      <CartStyles open={this.props.isOpen}>
        <>
          <header>
            Your Cart
            <CloseButton onClick={this.props.toggleCart}>&times;</CloseButton>
          </header>
          {this.props.products.length && (
            <ul>
              {products.map(item => (
                <CartItemStyles key={item.product && item.product.id}>
                  <img
                    width="100"
                    src={item.product.image}
                    alt={item.product.title}
                  />
                  <div>
                    <h3>{item.product && item.product.title}</h3>
                    <p>
                      {formatMoney(item.product && item.product.price)} | qty:{' '}
                      {item.quantity} | total:{' '}
                      {formatMoney(item.quantity * item.product.price)}
                    </p>
                  </div>
                  <BigButton
                    // 1 needs to change to userId
                    onClick={() =>
                      this.props.deleteCartItem(1, item.product.id)
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
            {products.length && (
              // <TakeMyMoney>
              <BigButton>Checkout</BigButton>
              // </TakeMyMoney>
            )}
          </footer>
        </>
      </CartStyles>
    );
  }
}

const mapState = state => ({
  products: state.cart.products,
  isOpen: state.cart.isOpen,
  user: state.user,
  isLoggedIn: state.isLoggedIn
});

const mapDispatch = dispatch => ({
  getCart: userId => dispatch(fetchCart(userId)),
  toggleCart: () => dispatch(toggleCart()),
  deleteCartItem: (userId, productId) =>
    dispatch(deleteCartItem(userId, productId))
});

export default connect(mapState, mapDispatch)(Cart);
