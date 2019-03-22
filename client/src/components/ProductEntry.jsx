import React from 'react';

const ProductEntry = (props) => {
  return (
    <div>
      <div>{props.product.name}</div>
      <button onClick={() => props.productClick(props.product)}>Add To Cart</button>
    </div>
  )
}

export default ProductEntry;