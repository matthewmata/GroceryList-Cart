import React from 'react';
import ProductEntry from './ProductEntry.jsx'

const Products = (props) => {
  return (
    <div>
      {props.products.map((product, index) => <ProductEntry product={product} key={index} productClick={props.productClick}/> )}
    </div>
  )
}

export default Products