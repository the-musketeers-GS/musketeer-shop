import React from 'react';

const ReviewList = props => {
  let reviews = props.product.reviews || [];

  return (
    <div>
      {!reviews.length ? (
        <p>
          <strong>Reviews: </strong>
          There are no reviews for this product.
        </p>
      ) : (
        reviews.map(review => {
          return (
            <div key={review.id}>
              <strong>Reviews: </strong>
              {review.body}
              <p>
                <strong>Rating: </strong>
                {review.rating}
              </p>
              <p>
                <strong>Posted on: </strong>
                {review.createdAt.slice(0, 10)}
              </p>
              <br />
            </div>
          );
        })
      )}
    </div>
  );
};

export default ReviewList;
