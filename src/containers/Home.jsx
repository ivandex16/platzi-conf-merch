import React, { lazy } from 'react'
import initialState from '../initialState'
import {Helmet } from "react-helmet"
const Products = lazy(() => import('../component/products/Products'))
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Platzi conf Merch - Productos</title>
      </Helmet>
      <h3>Home</h3>
      <Products products={initialState.products}/>
    </div>
  )
}

export default Home