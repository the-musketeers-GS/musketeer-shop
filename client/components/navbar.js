import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logout } from '../store';
import { toggleCart } from '../store/cart';
import Cart from './Cart';
import Title from './styles/Title';
import NavStyles from './styles/NavStyles';

const Navbar = ({ handleClick, isLoggedIn, openCart, user }) => (
  <div>
    <Link to="/">
      <Title>MUSKETEER SHOP</Title>
    </Link>
    <NavStyles>
      <Link className="nav-button" to="/">
        Shop
      </Link>
      {isLoggedIn ? (
        <NavStyles>
          {/* The navbar will show these links after you log in */}
          <Link className="nav-button" to="/home">
            Account
          </Link>
          <a href="#" className="nav-button" onClick={handleClick}>
            Logout
          </a>
          <Link className="nav-button" to={`/orders/${user.id}`}>
            Orders
          </Link>
          {user.isAdmin && (
            <Link className="nav-button " to="/admin">
              Admin
            </Link>
          )}
          {user.isAdmin && (
            <Link className="nav-button " to="/admin/manage">
              Admin Products
            </Link>
          )}
        </NavStyles>
      ) : (
        <NavStyles>
          {/* The navbar will show these links before you log in */}
          <Link className="nav-button" to="/login">
            Login
          </Link>
          <Link className="nav-button" to="/signup">
            Sign Up
          </Link>
        </NavStyles>
      )}
      {/* <Link to="/cart">Cart 🛒</Link> */}
      <button className="nav-button" type="button" onClick={openCart}>
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
    isLoggedIn: !!state.user.id,
    user: state.user
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
