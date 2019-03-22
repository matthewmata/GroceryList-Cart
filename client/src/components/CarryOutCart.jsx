import React from 'react';
import CartEntry from './CartEntry.jsx'

const CarryOutCart = (props) => {
  return (
    <div>
      <div>
        {props.cart.map((item, index) => <CartEntry key={index} item={item}/>)}
      </div>
    </div>
  )
}

export default CarryOutCart