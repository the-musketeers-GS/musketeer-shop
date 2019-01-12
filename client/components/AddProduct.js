import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addThunkProduct } from '../store';

class AddProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      price: 0
    };
  }

  handleChange = e => {
    console.log(e.target);
    const name = e.target.name;
    const value = e.target.value;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addThunkProduct(this.state);
  };

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h3>Add Product Page</h3>

        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Enter New/Same Name"
          />
          <input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
            placeholder="Price"
          />
          <button type="submit">Update!</button>
        </form>
      </div>
    );
  }
}

const mapDispatch = { addThunkProduct };

export default withRouter(connect(null, mapDispatch)(AddProduct));
