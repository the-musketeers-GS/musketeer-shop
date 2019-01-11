import React from 'react';

const ReviewList = props => {
  let reviews = props.product.reviews;

  return (
    <div>
      Reviews:
      <br />
      {!reviews ? (
        <div>There are no reviews.</div>
      ) : (
        reviews.map(review => {
          return (
            <div key={review.id}>
              {review.body}
              <div>Rating: {review.rating}</div>
              <div>Posted on: {review.createdAt.slice(0, 10)}</div>
              <br />
            </div>
          );
        })
      )}
    </div>
  );
};

export default ReviewList;
