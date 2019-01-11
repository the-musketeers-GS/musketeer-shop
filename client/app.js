import React from 'react';

import { Navbar, ProductList } from './components';
import Routes from './routes';
import AdminManageRoutes from './components/AdminManage';
import { createGlobalStyle } from 'styled-components';

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
