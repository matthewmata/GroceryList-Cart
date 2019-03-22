import React from 'react';
import CheckoutEntry from './CheckoutEntry';

const Checkout = (props) => {
  let totalCost = 0;

  for(let item of props.cart) {
    totalCost += item.quantity * item.price
  }
  console.log(props.cart)
  return (
    <div>
      {props.cart.map((item, index) => <CheckoutEntry key={index} item={item}/>)}
      <div>
      Total : ${totalCost}.00
      </div>
    </div>
  )
}

export default Checkout