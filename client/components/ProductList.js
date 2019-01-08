import React from 'react'
import {connect} from 'react-redux'
import store from '../store'

import {Products} from './Products'

class ProductList extends React.Component {
  constructor() {
    super()

    this.state = {
      products: []
    }
  }

  componentDidMount() {
    this.setState(store.getState())
  }

  render() {
    const {products} = this.state
    return (
      <div>
        {products.map(product => {
          return (
            <ul key={product.id}>
              <Products products={products} />
            </ul>
          )
        })}
        <h1>Hello World!</h1>
      </div>
    )
  }
}

const mapState = state => {
  return {
    products: state.products
  }
}

export default connect(mapState)(ProductList)
