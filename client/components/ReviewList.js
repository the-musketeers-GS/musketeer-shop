import React from 'react';
import { connect } from 'react-redux';
import { fetchReviewsForOneProject } from '../store/review';

class ReviewList extends React.Component {
  componentDidMount() {
    const projId = Number(this.props.match.params.id);
    this.props.fetchReviewsForOneProject(projId);
  }

  render() {
    let count = 1;
    return (
      <div>
        Reviews
        {!this.props.reviews || this.props.reviews.length === 0 ? (
          <div>There are no reviews.</div>
        ) : (
          this.props.reviews.map(review => {
            return (
              <div key={review.id}>
                <span>{count++}. </span>
                {review.body}
                <div>Rating: {review.rating}</div>
              </div>
            );
          })
        )}
      </div>
    );
  }
}
const mapStateToProps = state => {
  console.log('state in mapStateToProps-------', state);
  return {
    reviews: state.review.allProjReviews
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchReviewsForOneProject: projId =>
      dispatch(fetchReviewsForOneProject(projId))
  };
};

const ConnectedReviewList = connect(mapStateToProps, mapDispatchToProps)(
  ReviewList
);

export default ConnectedReviewList;
