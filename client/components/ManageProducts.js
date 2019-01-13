import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { ManageProductList } from '../components';
import { fetchProducts, deleteThunkProduct } from '../store';

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
        <div>
          <h3>Total # of Products: {products.length}</h3>
          <Link to="/manage/product/add">Add Product</Link>
          <table>
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Title</th>
                <th>Price (in cents)</th>
                <th>Stock Qty</th>
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
