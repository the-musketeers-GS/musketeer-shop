import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import formatMoney from '../../lib/formatMoney';
import AddToCart from './AddToCart';
import avgRating from '../../lib/avgRating';
import { createCartItem } from '../store/cart';

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

  handleSelect = e => {
    this.setState({ filteredProducts: e.target.value, searchProducts: '' });
  };

  handleAdd = (user, product) => {
    if (this.props.isLoggedIn) {
      this.props.addToCart(user, product);
    }
  };

  handleAddNoUser = async product => {
    let noUserCart = [];
    // noUserCart = JSON.parse(localStorage.getItem('cart'))
    await noUserCart.push(product);
    localStorage.setItem('cart', JSON.stringify(noUserCart));
  };

  render() {
    let { products, user, isLoggedIn, addToCart } = this.props;
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
          <h2>No result found in {filteredProducts.toUpperCase()}</h2>
        ) : (
          products.map(product => (
            <ul key={product.id}>
              <Link to={`/products/${product.id}`}>
                <li>{product.title}</li>
                <li>{formatMoney(product.price)}</li>
                <img src={`${product.image}`} />
                <li>
                  Avg rating:{' '}
                  {product.reviews.length
                    ? avgRating(product.reviews.map(review => review.rating))
                    : 'No Reviews'}
                </li>
              </Link>
              <AddToCart
                product={product}
                user={user}
                isLoggedIn={isLoggedIn}
                handleAdd={this.handleAdd}
                handleAddNoUser={this.handleAddNoUser}
                addToCart={addToCart}
              />
            </ul>
          ))
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

const mapDispatch = dispatch => ({
  addToCart: (userId, productId) => dispatch(createCartItem(userId, productId))
});

export default withRouter(connect(mapState, mapDispatch)(ProductList));
