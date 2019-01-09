import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

// const SingleProduct = props => {
//   const id = Number(props.match.params.id);
//   console.log(props);
//   const [product] =
//     props.products.length && props.products.filter(p => p.id === id);
//   console.log(product);
//   return (
//     <div>
//       <h2>Single Product</h2>
//       <h2>{product.title}</h2>
//       <h4>{product.price}</h4>
//       <p>{product.description}</p>
//     </div>
//   );
// };

class SingleProduct extends React.Component {
  constructor() {
    super();

    this.state = {
      singleProduct: {}
    };
  }

  async componentDidMount() {
    try {
      const id = Number(this.props.match.params.id);
      const { data } = await axios.get(`/api/products/${id}`);
      this.setState({
        singleProduct: data
      });
    } catch (err) {
      console.error(err);
    }
  }

  render() {
    const { singleProduct } = this.state;
    console.log(this.state);
    return (
      <div>
        <h2>Single Product</h2>
        <h2>{singleProduct.title}</h2>
        <h4>{singleProduct.price}</h4>
        <p>{singleProduct.description}</p>
      </div>
    );
  }
}

const mapState = state => {
  return {
    products: state.product
  };
};

export default withRouter(connect(mapState)(SingleProduct));
