import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

class ReviewList extends React.Component {
  componentDidMount() {
    const prodId = this.props.match.params.id;
  }

  render() {
    return <div>Reviews</div>;
  }
}
const mapStateToProps = dispatch => {
  return {};
};

const mapDispatchToProps = dispatch => {};

const ConnectedReviewList = connect(mapStateToProps, mapDispatchToProps)(
  ReviewList
);

export default ConnectedReviewList;
