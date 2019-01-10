import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import formatMoney from '../../lib/formatMoney';

class ProductList extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredProducts: '',
      searchProducts: ''
    };
  }

  handleKey = e => {
    event.preventDefault();
    if (e.key === 'Enter') {
      this.setState({ searchProducts: '' });
    }
  };

  handleChange = e => {
    this.setState({ searchProducts: e.target.value });
  };

  handleClick = e => {
    this.setState({ filteredProducts: e.target.value });
    console.log(e.target.value);
  };

  render() {
    let { products } = this.props;
    if (this.state.filteredProducts) {
      products = products.filter(
        product => product.category === this.state.filteredProducts
      );
    }

    if (this.state.searchProducts) {
      products = products.filter(
        product =>
          product.title.includes(this.state.searchProducts) ||
          product.description.includes(this.state.searchProducts)
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

        {products.map(product => (
          <ul key={product.id}>
            <Link to={`/products/${product.id}`}>
              <li>{product.title}</li>
              <li>{formatMoney(product.price)}</li>
              <img src={`${product.image}`} />
            </Link>
          </ul>
        ))}
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
