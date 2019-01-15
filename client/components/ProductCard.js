import React from 'react';
import { Link } from 'react-router-dom';
import AddToCart from './AddToCart';
import formatMoney from '../../lib/formatMoney';
import avgRating from '../../lib/avgRating';

const ProductCard = props => {
  const { user, isLoggedIn, products, handleAdd, handleAddNoUser } = props;

  return (
    <div className="product-card">
      {products.map(product => (
        <Link to={`/products/${product.id}`}>
          <div id="product-card" key={product.id}>
            <img src={product.image} alt={product.title} />
            <h5>{product.title}</h5>
            <p>{formatMoney(product.price)}</p>
            <p>
              Avg rating:{' '}
              {product.reviews.length
                ? avgRating(product.reviews.map(review => review.rating))
                : 'No Reviews'}
            </p>
            <AddToCart
              product={product}
              user={user}
              isLoggedIn={isLoggedIn}
              handleAdd={props.handleAdd}
              handleAddNoUser={props.handleAddNoUser}
            />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductCard;
