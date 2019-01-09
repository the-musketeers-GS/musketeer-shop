import React from 'react';
import { Route, Link } from 'react-router-dom';
import formatMoney from '../../lib/formatMoney';
import SingleProduct from './SingleProduct';
import AddToCart from './AddToCart';

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
          <AddToCart />
        </ul>
      ))}
    </div>
  );
};

export default ProductList;
