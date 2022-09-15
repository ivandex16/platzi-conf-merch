import React, { lazy } from 'react'
import initialState from '../initialState'
const Products = lazy(() => import('../component/products/Products'))
const Home = () => {
  return (
    <div>
      <h3>Home</h3>
      <Products products={initialState.products}/>
    </div>
  )
}

export default Home