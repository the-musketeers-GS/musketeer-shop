import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import ReviewList from './ReviewList';

const SingleProduct = props => {
  const id = Number(props.match.params.id);

  let product = {};
  if (props.products.length) {
    [product] = props.products.filter(p => p.id === id);
  }

  return (
    <div>
      <h2>Single Product</h2>
      <h2>{product.title}</h2>
      <h4>{product.price}</h4>
      <p>{product.description}</p>
      <ReviewList product={product} />
    </div>
  );
};

const mapState = ({ products }) => {
  return {
    products
  };
};

export default withRouter(connect(mapState)(SingleProduct));
