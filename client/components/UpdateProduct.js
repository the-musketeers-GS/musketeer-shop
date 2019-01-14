import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { updateThunkProduct } from '../store';
import history from '../history';

import { UpdateButton, Button } from './styles/Button';
import { Form, LabelUpdate, Input, Select } from './styles/Form';

class UpdateProduct extends React.Component {
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
    this.props.updateThunkProduct(
      this.props.match.params.productId,
      this.state
    );
  };

  render() {
    return (
      <div id="updateForm">
        <Form onSubmit={this.handleSubmit}>
          <h2>- UPDATE PRODUCT -</h2>
          <LabelUpdate htmlFor="title">Edit Title</LabelUpdate>
          <Input
            type="text"
            name="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Edit Product Title"
            required
          />
          <LabelUpdate htmlFor="price">Edit Price in cents</LabelUpdate>
          <Input
            type="number"
            name="price"
            value={this.state.price}
            onChange={this.handleChange}
            placeholder="Edit Price ($1 = 100)"
            min="1"
            required
          />
          <LabelUpdate htmlFor="stockQty"> Edit Stock Quantity</LabelUpdate>
          <Input
            type="number"
            name="stockQty"
            value={this.state.stockQty}
            onChange={this.handleChange}
            placeholder="Enter # of products in stock"
            min="0"
          />
          <LabelUpdate htmlFor="category">Edit Category</LabelUpdate>
          <Select
            type="select"
            name="category"
            value={this.state.category}
            onChange={this.handleChange}
            placeholder="category"
          >
            <option value="category" onClick={this.handleSelect}>
              --
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
          </Select>
          <LabelUpdate htmlFor="size">Edit Size</LabelUpdate>
          <div display="flex">
            <Input
              type="radio"
              id="S"
              name="size"
              value="S"
              onClick={this.handleChange}
            />
            <LabelUpdate id="size" htmlFor="S">
              S
            </LabelUpdate>
            <Input
              type="radio"
              id="M"
              name="size"
              value="M"
              onClick={this.handleChange}
            />
            <LabelUpdate id="size" htmlFor="M">
              M
            </LabelUpdate>
            <Input
              type="radio"
              id="L"
              name="size"
              value="L"
              onClick={this.handleChange}
            />
            <LabelUpdate id="size" htmlFor="L">
              L
            </LabelUpdate>
            <Input
              type="radio"
              id="XL"
              name="size"
              value="XL"
              onClick={this.handleChange}
            />
            <LabelUpdate id="size" htmlFor="XL">
              XL
            </LabelUpdate>
            <Input
              type="radio"
              id="NA"
              name="size"
              value="NA"
              onClick={this.handleChange}
            />
            <LabelUpdate id="size" htmlFor="N/A">
              NA
            </LabelUpdate>
          </div>
          <LabelUpdate htmlFor="description">Edit Desciptrion</LabelUpdate>
          <textarea
            rows="5"
            cols="30"
            type="textArea"
            name="description"
            value={this.state.description}
            onChange={this.handleChange}
            placeholder="Edit Description.."
          />
          <div id="manage-buttons">
            <UpdateButton type="submit">Update</UpdateButton>
            <Button onClick={() => history.goBack()}>Cancel</Button>
          </div>
        </Form>
      </div>
    );
  }
}

const mapDispatch = { updateThunkProduct };

export default withRouter(connect(null, mapDispatch)(UpdateProduct));
