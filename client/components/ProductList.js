import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { connect } from 'react-redux';
import formatMoney from '../../lib/formatMoney';

const ProductList = props => {
  const { products } = props;
  return (
    <div>
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
};

const mapState = ({ products }) => {
  return {
    products
  };
};

export default withRouter(connect(mapState)(ProductList));
