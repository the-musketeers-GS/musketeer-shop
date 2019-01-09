import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

const SingleProduct = props => {
  const id = Number(props.match.params.id);
  console.log(props);
  const [product] =
    props.products.length && props.products.filter(p => p.id === id);
  console.log(product);
  return (
    <div>
      <h2>Single Product</h2>
      <h2>{product.title}</h2>
      <h4>{product.price}</h4>
      <p>{product.description}</p>
    </div>
  );
};

const mapState = state => {
  return {
    products: state.product
  };
};

export default withRouter(connect(mapState)(SingleProduct));
