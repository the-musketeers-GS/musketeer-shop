import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Navbar } from './components';
import Routes from './routes';
import { createGlobalStyle } from 'styled-components';

import {
  fetchProducts,
  requestCart,
  fetchCart,
  checkLocalStorage
} from './store';

const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  body {
    /* font-family: 'radnika_next'; */
    padding: 0;
    margin: 0;
    font-size: 1.5rem;
    line-height: 2;
  }
  a {
    text-decoration: none;
    color: black;
  }
`;

class App extends React.Component {
  componentDidMount() {
    this.props.fetchProducts();
    this.props.checkLocalStorage();

    if (!this.props.user.id) {
      if (!localStorage.guestCart) {
        const cart = JSON.stringify([]);
        localStorage.setItem('guestCart', cart);
      }
      this.props.requestCart(JSON.parse(localStorage.guestCart));
    } else this.props.fetchCart(this.props.user.id);
  }
  render() {
    return (
      <div>
        <Navbar />
        <Routes />
        <GlobalStyle />
      </div>
    );
  }
}

const mapDispatchToProps = {
  fetchProducts,
  requestCart,
  fetchCart,
  checkLocalStorage
};

const mapStateToProps = state => {
  const { user, cart } = state;
  return {
    user,
    cart
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));
