import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Review from './Review';
import { fetchReviewsForOneProject } from '../store/ReviewList';

class ReviewList extends React.Component {
  componentDidMount() {
    //const projId = Number(this.props.match.params.id);
    const projId = 5;
  }

  render() {
    return <div>Reviews</div>;
  }
}
const mapStateToProps = dispatch => {
  return {};
};

const mapDispatchToProps = dispatch => {
  return {};
};

const ConnectedReviewList = connect(mapStateToProps, mapDispatchToProps)(
  ReviewList
);

export default ConnectedReviewList;
