import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import styled from 'styled-components';
import formatMoney from '../../lib/formatMoney';
import AddToCart from './AddToCart';
import avgRating from '../../lib/avgRating';
import { createCartItem, guestAddCart } from '../store';

const ProductListStyles = styled.div`
  img {
    width: 15%;
    height: 15%;
  }
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 60px;
  margin: 0 auto;
`;

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

        <ProductListStyles>
          {!products.length ? (
            !filteredProducts ? (
              <h2>
                I'm sorry but we do not carry the item you are looking for..
              </h2>
            ) : (
              <h2>No result found in {filteredProducts.toUpperCase()}</h2>
            )
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
                />
              </ul>
            ))
          )}
        </ProductListStyles>
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
