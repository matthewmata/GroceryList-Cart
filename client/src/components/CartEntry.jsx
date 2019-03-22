import React from 'react';

const CartEntry = (props) => {
  return (
    <div>
      {props.item.quantity && 
        (<div>{props.item.quantity} {props.item.name}</div>)
      }
      
    </div>
  )
}

export default CartEntry;