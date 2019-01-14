import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import history from '../history';

import { ManageProductList } from '../components';
import { fetchProducts, deleteThunkProduct } from '../store';

import { AddProduct } from './styles/Button';

class ManageProducts extends Component {
  componentDidMount() {
    this.props.fetchProducts();
  }

  handleDelete = (e, product) => {
    e.preventDefault();
    this.props.deleteThunkProduct(product);
  };

  render() {
    const { products } = this.props || [];

    return (
      products.length && (
        <div id="manage-product-list">
          <h3>Total # of Products: {products.length}</h3>
          <AddProduct onClick={() => history.push('/manage/product/add')}>
            Add Product
          </AddProduct>
          <table className="fixed_header">
            <thead>
              <tr>
                <th>Product ID</th>
                <th>Product Title</th>
                <th>
                  Price <small>(in cents)</small>
                </th>
                <th>Stock Qty</th>
                <th />
                <th />
                <th />
              </tr>
            </thead>
            <tbody>
              {products.map(product => {
                return (
                  <ManageProductList
                    key={product.id}
                    product={product}
                    handleDelete={this.handleDelete}
                  />
                );
              })}
            </tbody>
          </table>
        </div>
      )
    );
  }
}

const mapState = state => ({ products: state.products });

const mapDispatch = { fetchProducts, deleteThunkProduct };

export default withRouter(connect(mapState, mapDispatch)(ManageProducts));
