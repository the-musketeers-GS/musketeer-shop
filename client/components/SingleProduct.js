import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewList from './ReviewList';

import formatMoney from '../../lib/formatMoney';

const SingleProduct = props => {
  const id = Number(props.match.params.id);

  let product = {};
  if (props.products.length) {
    [product] = props.products.filter(p => p.id === id);
  }

  return (
    <div id="single-product-page">
      <img src={product.image} />
      <h2>{product.title}</h2>
      <h3>{formatMoney(product.price)}</h3>

      <p>
        <strong>Description: </strong>
        {product.description}
      </p>
      <ReviewList product={product} />
    </div>
  );
};

const mapState = state => {
  return { products: state.products };
};

export default withRouter(connect(mapState)(SingleProduct));
