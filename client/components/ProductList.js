import React from 'react';
import { Route, Link } from 'react-router-dom';
import formatMoney from '../../lib/formatMoney';
import SingleProduct from './SingleProduct';

const ProductList = props => {
  const { products } = props;
  return (
    <div>
      {products.length &&
        products.map(product => (
          <ul key={product.id}>
            {/* <Route path={`/products/${product.id}`} render={routeProps => <SingleProduct {...routeProps} product={product} /> } /> */}
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

export default ProductList;
