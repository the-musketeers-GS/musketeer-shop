import React from 'react'
// import SingleProduct from './SingleProduct'

const Products = props => {
  const {product} = props
  console.log('<Products /> ', props)
  return (
    <div>
      <h1>{product.title}</h1>
    </div>
  )
}

export default Products
