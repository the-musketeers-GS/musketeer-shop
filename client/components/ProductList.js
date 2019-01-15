import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { createCartItem, guestAddCart } from '../store';
import ProductCard from './ProductCard';

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredProducts: '',
      searchProducts: ''
    };
  }

  handleKey = e => {
    if (e.key === 'Enter') {
      e.preventDefault();
    }
  };

  handleChange = e => {
    this.setState({ searchProducts: e.target.value });
  };

  handleSelect = e => {
    this.setState({ filteredProducts: e.target.value, searchProducts: '' });
  };

  handleAdd = (user, product) => {
    this.props.createCartItem(user, product);
  };

  handleAddNoUser = product => {
    this.props.guestAddCart(product);
  };

  render() {
    let { products, user, isLoggedIn } = this.props;
    let { filteredProducts, searchProducts } = this.state;
    if (filteredProducts) {
      products = products.filter(
        product => product.category === filteredProducts
      );
    }
    if (searchProducts) {
      products = products.filter(
        product =>
          product.title.toLowerCase().includes(searchProducts.toLowerCase()) ||
          product.description
            .toLowerCase()
            .includes(searchProducts.toLowerCase())
      );
    }

    return (
      <div>
        <div className="dropdown">
          <button type="button" className="dropbtn">
            Filter By Category >>{' '}
          </button>
          <div className="dropdown-content">
            <option value="" onClick={this.handleSelect}>
              All Products
            </option>
            <option value="accessories" onClick={this.handleSelect}>
              Accessories
            </option>
            <option value="boots" onClick={this.handleSelect}>
              Boots
            </option>
            <option value="clothes" onClick={this.handleSelect}>
              Clothes
            </option>
            <option value="hats" onClick={this.handleSelect}>
              Hats
            </option>
            <option value="weapons" onClick={this.handleSelect}>
              Weapons
            </option>
          </div>
        </div>

        <div>
          <form className="search" id="searchProduct" method="post">
            <input
              type="text"
              name="searchProducts"
              value={this.state.searchProducts}
              onKeyDown={this.handleKey}
              onChange={this.handleChange}
              placeholder={`Search in ${this.state.filteredProducts.toUpperCase()} by name, keyword, etc...`}
            />
          </form>
        </div>

        {!products.length ? (
          !filteredProducts ? (
            <h2>
              I'm sorry but we do not carry the item you are looking for..
            </h2>
          ) : (
            <h2>No result found in {filteredProducts.toUpperCase()}</h2>
          )
        ) : (
          <ProductCard
            products={products}
            handleAdd={this.props.handleAdd}
            handleAddNoUser={this.props.handleAddNoUser}
          />
        )}
      </div>
    );
  }
}

const mapState = state => {
  return {
    user: state.user,
    isLoggedIn: !!state.user.id,
    products: state.products
  };
};

const mapDispatch = { createCartItem, guestAddCart };

export default withRouter(connect(mapState, mapDispatch)(ProductList));
