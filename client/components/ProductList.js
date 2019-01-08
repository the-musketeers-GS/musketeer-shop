import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import store from '../store';

import { Products } from './Products';

// class ProductList extends React.Component {
//   constructor() {
//     super()

// this.state = store.getState()
// }

// componentDidMount() {
//   this.setState({products: store.getState()})
// }

const ProductList = props => {
  // render() {
  return (
    <div>
      {props.products.map(product => (
        <ul key={product.id}>
          <li>{product.title}</li>
        </ul>
      ))}
    </div>
  );
};

// const mapState = state => {
//   return {
//     products: state.products
//   }
// }

// export default withRouter(connect(mapState)(ProductList))

export default ProductList;
