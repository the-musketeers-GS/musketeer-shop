import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { addThunkProduct } from '../store';
import history from '../history';

import { AddButton, Button } from './styles/Button';
import { Form, Label, Input, Select } from './styles/Form';

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
          <h2>- ADD NEW PRODUCT -</h2>
          <div className="required">
            <Label htmlFor="title">Product Title</Label>
            <Input
              type="text"
              name="title"
              value={this.state.title}
              onChange={this.handleChange}
              placeholder="Enter Product Title"
              required
            />
            <Label htmlFor="price">Price in cents</Label>
            <Input
              type="number"
              name="price"
              value={this.state.price}
              onChange={this.handleChange}
              placeholder="Enter Price ($1 = 100)"
              min="1"
              required
            />
            <Label htmlFor="stockQty">Stock Quantity</Label>
            <Input
              type="number"
              name="stockQty"
              value={this.state.stockQty}
              onChange={this.handleChange}
              placeholder="Enter # of products in stock"
              min="0"
              required
            />
            <Label htmlFor="category">Select Category</Label>
            <Select
              type="select"
              name="category"
              value={this.state.category}
              onChange={this.handleChange}
              placeholder="category"
              required
            >
              <option value="">--</option>
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
            </Select>
          </div>
          <Label htmlFor="size">Size</Label>
          <div display="flex">
            <Input
              type="radio"
              id="S"
              name="size"
              value="S"
              onClick={this.handleChange}
            />
            <Label id="size" htmlFor="S">
              S
            </Label>
            <Input
              type="radio"
              id="M"
              name="size"
              value="M"
              onClick={this.handleChange}
            />
            <Label id="size" htmlFor="M">
              M
            </Label>
            <Input
              type="radio"
              id="L"
              name="size"
              value="L"
              onClick={this.handleChange}
            />
            <Label id="size" htmlFor="L">
              L
            </Label>
            <Input
              type="radio"
              id="XL"
              name="size"
              value="XL"
              onClick={this.handleChange}
            />
            <Label id="size" htmlFor="XL">
              XL
            </Label>
            <Input
              type="radio"
              id="NA"
              name="size"
              value="NA"
              onClick={this.handleChange}
            />
            <Label id="size" htmlFor="N/A">
              NA
            </Label>
          </div>
          <Label htmlFor="description">Product Description</Label>
          <textarea
            rows="5"
            cols="30"
            type="textArea"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Enter Description.."
          />
          <div id="manage-buttons">
            <AddButton type="submit">Add</AddButton>
            <Button onClick={() => history.goBack()}>Cancel</Button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapDispatch = { addThunkProduct };

export default withRouter(connect(null, mapDispatch)(AddProduct));
