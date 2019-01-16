import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ManageProducts from './ManageProducts';
// import ManageOrders from './ManageOrders'
// import ManageUsers from './ManageUsers'

import UpdateProduct from './UpdateProduct';
import AddProduct from './AddProduct';
// import UpdateOrder from './UpdateOrder'
// import UpdateUser from './UpdateUser'

const AdminManageRoutes = () => {
  return (
    <Switch>
      <Route exact path="/admin/manage" component={ManageProducts} />
      <Route exact path="/admin/manage/products" component={ManageProducts} />
      <Route exact path="/admin/manage/product/add" component={AddProduct} />
      <Route
        path="/admin/manage/product/:productId"
        component={UpdateProduct}
      />
    </Switch>
  );
};

export default AdminManageRoutes;
