import React from 'react';
import Products from './Products.jsx';
import Checkout from './Checkout.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    return (
      <div>
        <div>
          {/* <Products /> */}
        </div>
        <div>
          LIST WILL GO HERE
        </div>
        <div>
          <button>Checkout</button>
        </div>
      </div>
    )
  }

}

export default App;