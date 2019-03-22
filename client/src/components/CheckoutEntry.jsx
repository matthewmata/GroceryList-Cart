import React from 'react';

const CheckoutEntry = (props) => {
  return (
    <div>
      {props.item.quantity && 
        (<div>{props.item.quantity} {props.item.name} ${props.item.price}.00 </div>)
      }
      
    </div>
  )
}

export default CheckoutEntry;