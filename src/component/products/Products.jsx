import React, { lazy, useContext,Suspense } from 'react'
import {ProductsItems} from './styles'
import AppContext from '../../context/AppContext'

const Product = lazy(() => import('./Product'))


const Products = () => {
  const {state, addToCart} = useContext(AppContext)
  const {products} = state

  const handleAddToCart = product => () => {
    addToCart(product)
  }

  return (
    <div>
        <ProductsItems>
          <Suspense fallback={<div>Loading...</div>}>
            {
                products.map(product => (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart}/>
                ))
            }
            
          </Suspense>
        </ProductsItems>
    </div>
  )
}

export default Products