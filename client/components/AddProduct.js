import React from 'react';
import { render } from 'react-dom';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form';
import { DropdownList } from 'react-widgets';
import { addThunkProduct } from '../store';
import formatMoney from '../../lib/formatMoney';

// class AddProduct extends React.Component {
//   constructor(props) {
//     super(props)

//     this.state = {
//       title: '',
//       price: 0,
//     };
//   }

//   handleChange = e => {
//     console.log(event.target)
//     this.setState({
//       title: e.target.value,
//       price: e.target.value
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     this.props.addThunkProduct(this.state);
//   };

//   render() {
//     return (
//       <div>
//       <h1>Hello World!</h1>
//       <h3>Add Product Page</h3>

//       <form onSubmit={this.handleSubmit}>
//           <input
//             type="text"
//             name="title"
//             value={this.state.title}
//             onChange={this.handleChange}
//             placeholder="Enter New/Same Name"
//           />
//           <input
//             type="number"
//             name="price"
//             value={this.state.price}
//             onChange={this.handleChange}
//             placeholder="Price"
//           />
//           <button type="submit">Update!</button>
//         </form>
//       </div>
//     )
//   }
// }

// const mapDispatch = {addThunkProduct}

// export default withRouter(connect(null, mapDispatch)(AddProduct));

class AddProduct extends React.Component {
  renderField = field => {
    const { meta: { touched, error } } = field;
    return (
      <div>
        <label>{field.label}</label>
        <input type={field.type} {...field.input} />
        {touched ? error : ''}
      </div>
    );
  };

  handleSubmit = values => {
    this.props.addThunkProduct(values);
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;
    return (
      <form onSubmit={handleSubmit(this.handleSubmit)}>
        <div>
          <label>Product Title</label>
          <div>
            <Field
              name="productTitle"
              component={this.renderField}
              type="text"
              placeholder="Product Title"
            />
          </div>
        </div>
        <div>
          <label>Product Description</label>
          <div>
            <Field
              name="productDescription"
              component={this.renderField}
              type="text"
              placeholder="Product Description"
            />
          </div>
        </div>
        <div>
          <label>Price</label>
          <div>
            <Field
              name="price"
              component={this.renderField}
              type="number"
              placeholder="price"
            />
          </div>
        </div>
        <div>
          <label>Category</label>
          <div>
            <label>
              <Field
                name="category"
                component={this.renderField}
                type="radio"
                value="accessories"
              />{' '}
              Accessories
            </label>
            <label>
              <Field
                name="category"
                component={this.renderField}
                type="radio"
                value="boots"
              />{' '}
              Boots
            </label>
            <label>
              <Field
                name="category"
                component={this.renderField}
                type="radio"
                value="clothes"
              />{' '}
              Clothes
            </label>
            <label>
              <Field
                name="category"
                component={this.renderField}
                type="radio"
                value="hats"
              />{' '}
              Hats
            </label>
            <label>
              <Field
                name="category"
                component={this.renderField}
                type="radio"
                value="weapons"
              />{' '}
              Weapons
            </label>
          </div>
        </div>
        <div>
          <label>Size</label>
          <div>
            <DropdownList name="size" data={['S', 'M', 'L', 'XL']} />
          </div>
        </div>
        <div>
          <label htmlFor="stockQty">Stock Qty</label>
          <div>
            <Field
              name="stockQty"
              id="stockQty"
              component={this.renderField}
              type="checkbox"
            />
          </div>
        </div>
        <div>
          <label>Description</label>
          <div>
            <Field name="description" component={this.renderField} />
          </div>
        </div>
        <div>
          <button
            type="submit"
            disabled={pristine || submitting}
            onClick={this.handleSubmit}
          >
            Submit
          </button>
          <button type="button" onClick={reset}>
            Clear Values
          </button>
          <button type="button" onClick={() => this.props.history.goBack()}>
            Cancel
          </button>
        </div>
      </form>
    );
  }
}

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Please enter a product name.';
  }
  if (!values.price) {
    errors.price = 'Please enter the price of the product.';
  }
  if (!values.stockQty) {
    errors.stockQty = 'Please enter the product SKU.';
  }
  return errors;
};

export default reduxForm({
  validate,
  form: 'AddProduct'
})(connect(null, { addThunkProduct })(AddProduct));
