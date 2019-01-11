import React from 'react';

import { Navbar, ProductList } from './components';
import Routes from './routes';
import AdminManageRoutes from './components/AdminManage';

const App = () => {
  return (
    <div>
      <Navbar />
      <Routes />
      <AdminManageRoutes />
    </div>
  );
};

export default App;
