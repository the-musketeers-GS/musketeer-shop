import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { logout } from '../store';
import { toggleCart } from '../store/cart';
import Cart from './Cart';
import Title from './styles/Title';
import NavStyles from './styles/NavStyles';

const Navbar = ({ handleClick, isLoggedIn, openCart }) => (
  <div style={{ justifyContent: 'center' }}>
    <Link to="/">
      <Title>MUSKETEER SHOP</Title>
    </Link>
    <NavStyles>
      {isLoggedIn ? (
        <NavStyles>
          {/* The navbar will show these links after you log in */}
          <Link to="/home">Home</Link>
          <a href="#" onClick={handleClick}>
            Logout
          </a>
        </NavStyles>
      ) : (
        <NavStyles>
          {/* The navbar will show these links before you log in */}
          <Link to="/login">Login</Link>
          <Link to="/signup">Sign Up</Link>
        </NavStyles>
      )}
      {/* <Link to="/cart">Cart 🛒</Link> */}
      <button type="button" onClick={openCart}>
        Cart 🛒
      </button>
      <Cart />
    </NavStyles>
    <hr />
  </div>
);

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id
  };
};

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout());
    },
    openCart: () => dispatch(toggleCart())
  };
};

export default connect(mapState, mapDispatch)(Navbar);

/**
 * PROP TYPES
 */
Navbar.propTypes = {
  handleClick: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
