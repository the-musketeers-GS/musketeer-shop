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

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <GlobalStyle />
    </div>
  );
};

export default App;
