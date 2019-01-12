import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { withRouter, Link } from 'react-router-dom';

import { fetchProducts, deleteThunkProduct } from '../store';
import { ManageProductList } from '../components';

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
                <th>Price</th>
                <th>stockQty</th>
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

const mapState = state => {
  return {
    products: state.products
  };
};

const mapDispatch = dispatch => {
  return {
    fetchProducts: () => dispatch(fetchProducts()),
    deleteThunkProduct: product => dispatch(deleteThunkProduct(product))
  };
};

export default withRouter(connect(mapState, mapDispatch)(ManageProducts));
