import React from 'react';

import { Navbar, ProductList, ConnectedReviewList } from './components';
import Routes from './routes';

const App = () => {
  return (
    <div>
      <Navbar />
      <ConnectedReviewList />
      <Routes />
    </div>
  );
};

export default App;
