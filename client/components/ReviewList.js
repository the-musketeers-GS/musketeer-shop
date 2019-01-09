import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Review from './Review';
import { fetchReviewsForOneProject } from '../store/review';

class ReviewList extends React.Component {
  componentDidMount() {
    //const projId = Number(this.props.match.params.id);
    const projId = 5;
    this.props.fetchReviewsForOneProject(projId);
  }

  render() {
    return (
      <div>
        Reviews
        {this.props.reviews &&
          this.props.reviews.map(review => {
            return <div key={review.id}>{review.body}</div>;
          })}
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
