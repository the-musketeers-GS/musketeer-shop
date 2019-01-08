import React from 'react'

import {Navbar, ProductList} from './components'
import Routes from './routes'

const App = () => {
  return (
    <div>
      <Navbar />
      <ProductList />
      <Routes />
    </div>
  )
}

export default App
