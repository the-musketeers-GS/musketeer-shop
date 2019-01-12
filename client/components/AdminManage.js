import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      <Route exact path="/manage" component={ManageProducts} />
      <Route exact path="/manage/products" component={ManageProducts} />
      <Route exact path="/manage/product/add" component={AddProduct} />
      <Route path="/manage/product/:productId" component={UpdateProduct} />
      {/* <Route path="/manage/order" component={ManageOrders} />
      <Route path="/manage/order/:orderId" component={UpdateOrder} />
      <Route path="/manage/user" component={ManageUsers} />
      <Route path="/manage/user/:userId" component={UpdateUser} /> */}
    </Switch>
  );
};

export default AdminManageRoutes;
