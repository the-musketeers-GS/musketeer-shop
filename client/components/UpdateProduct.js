import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import store from '../store';
import { updateThunkProduct } from '../store';

class UpdateProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: ''
    };

    console.log(this.props);
  }

  handleChange = e => {
    this.setState({
      title: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.updateThunkProduct(this.props.match.params.id, this.state);
    console.log('updateProduct');
    console.log('this.state>>>', this.state);
    // console.log('id ', this.props.match.params.id);
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Enter New/Same Name"
          />
          <button type="submit">Update!</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = dispatch => {
  return {
    updateThunkProduct: () => dispatch(updateThunkProduct())
  };
};

export default withRouter(connect(null, mapDispatch)(UpdateProduct));
