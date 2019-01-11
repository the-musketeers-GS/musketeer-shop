import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import formatMoney from '../../lib/formatMoney';
import AddToCart from './AddToCart';

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredProducts: '',
      searchProducts: '',
      searched: ''
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

  handleClick = e => {
    this.setState({ filteredProducts: e.target.value, searchProducts: '' });
  };

  render() {
    let { products } = this.props;
    let { filteredProducts, searchProducts, searched } = this.state;
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
    if (!searchProducts && searched) {
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
            <option value="" onClick={this.handleClick}>
              All Products
            </option>
            <option value="accessories" onClick={this.handleClick}>
              Accessories
            </option>
            <option value="boots" onClick={this.handleClick}>
              Boots
            </option>
            <option value="clothes" onClick={this.handleClick}>
              Clothes
            </option>
            <option value="hats" onClick={this.handleClick}>
              Hats
            </option>
            <option value="weapons" onClick={this.handleClick}>
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
          <h2>No result found in {filteredProducts.toUpperCase()}</h2>
        ) : (
          products.map(product => (
            <ul key={product.id}>
              <Link to={`/products/${product.id}`}>
                <li>{product.title}</li>
                <li>{formatMoney(product.price)}</li>
                <img src={`${product.image}`} />
              </Link>
              <AddToCart productId={product.id} />
            </ul>
          ))
        )}
      </div>
    );
  }
}

const mapState = ({ products }) => {
  return {
    products
  };
};

export default withRouter(connect(mapState)(ProductList));
