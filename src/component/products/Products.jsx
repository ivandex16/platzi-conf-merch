import React, { lazy, useContext,Suspense } from 'react'
import {ProductsItems} from './styles'
import AppContext from '../../context/AppContext'

const Product = lazy(() => import('./Product'))


const Products = () => {
  const {state, addToCart} = useContext(AppContext)
  const {products} = state
  const [open, setOpen] = React.useState(false);


  const handleAddToCart = product => () => {
    addToCart(product)
    setOpen(true);
  }

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
  };

  return (
    <div>
        <ProductsItems>
          <Suspense fallback={<div>Loading...</div>}>
            {
                products.map(product => (
                    <Product key={product.id} product={product} handleAddToCart={handleAddToCart} open={open} close={handleClose}/>
                ))
            }
            
          </Suspense>
        </ProductsItems>
    </div>
  )
}

export default Products