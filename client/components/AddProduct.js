import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addThunkProduct } from '../store';

import { UpdateButton } from './styles/Button';
import { Form, Label, Input } from './styles/Form';

class AddProduct extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: '',
      price: '',
      stockQty: '',
      category: '',
      size: 'NA',
      description: ''
    };
  }

  handleChange = e => {
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
        <Form onSubmit={this.handleSubmit}>
          <h3>Add Product</h3>
          <Label htmlFor="title">Product Title</Label>
          <Input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Enter New/Same Name"
            required
          />
          <Label htmlFor="price">Price in cents</Label>
          <Input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
            placeholder="Price"
            min="1"
            required
          />
          <Label htmlFor="stockQty">Stock Quantity</Label>
          <Input
            type="number"
            name="stockQty"
            value={this.state.stockQty}
            onChange={this.handleChange}
            placeholder="stockQty"
            min="0"
          />
          <Label htmlFor="category">Category</Label>
          <select
            type="select"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            placeholder="category"
          >
            <option value="category" onClick={this.handleSelect}>
              Select Category:
            </option>
            <option value="accessories" onClick={this.handleSelect}>
              Accessories
            </option>
            <option value="boots" onClick={this.handleSelect}>
              Boots
            </option>
            <option value="clothes" onClick={this.handleSelect}>
              Clothes
            </option>
            <option value="hats" onClick={this.handleSelect}>
              Hats
            </option>
            <option value="weapons" onClick={this.handleSelect}>
              Weapons
            </option>
          </select>
          <div id="selectSize">
            <Label htmlFor="size">Size</Label>
            <Input
              type="radio"
              id="S"
              name="size"
              value="S"
              onClick={this.handleChange}
            />
            <Label htmlFor="S">S</Label>
            <Input
              type="radio"
              id="M"
              name="size"
              value="M"
              onClick={this.handleChange}
            />
            <Label htmlFor="M">M</Label>
            <Input
              type="radio"
              id="L"
              name="size"
              value="L"
              onClick={this.handleChange}
            />
            <Label htmlFor="L">L</Label>
            <Input
              type="radio"
              id="XL"
              name="size"
              value="XL"
              onClick={this.handleChange}
            />
            <Label htmlFor="XL">XL</Label>
            <Input
              type="radio"
              id="NA"
              name="size"
              value="NA"
              onClick={this.handleChange}
            />
            <Label htmlFor="N/A">NA</Label>
          </div>
          <Input
            type="textArea"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Description"
          />
          <UpdateButton color="white" background="green" type="submit">
            Update!
          </UpdateButton>
        </Form>
      </div>
    );
  }
}

const mapDispatch = { addThunkProduct };

export default withRouter(connect(null, mapDispatch)(AddProduct));
