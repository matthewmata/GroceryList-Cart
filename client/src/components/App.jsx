import React from 'react';
import Products from './Products.jsx';
import CarryOutCart from './CarryOutCart.jsx'
import Checkout from './Checkout.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked : false,
      products: [],
    }
    this.getProducts = this.getProducts.bind(this);
    this.purchaseHandler = this.purchaseHandler.bind(this);
    this.productClick = this.productClick.bind(this);
    this.salesHandler = this.salesHandler.bind(this);
  }

  componentDidMount() {
    this.getProducts();
  }
 
  getProducts() {
    axios
      .get('/api/products')
      .then((data) => {
        this.setState({
          products: data.data
        })
      })
      .catch((err) => console.log(err))
  }

  purchaseHandler() {
    this.setState({
      clicked: true
    }, () => console.log('clickity click click cachoo', this.state.clicked))
  }

  productClick(product) {
    let newProduct = [...this.state.products];
    for(let p of newProduct) {
      if (p.name === product.name) {
        p.quantity += 1;
      }
    }
    this.setState({
      products: newProduct
    })
  }

  salesHandler(products) {
    axios
      .get('/api/sales')
      .data((data)=> {
        console.log(data);
        return data;
      })
      .then((data) => {
        let newProducts = [...this.state.products];
        for(let i = 0; i < newProducts.length; i++) {
          newProducts[i].quantity += data.data.quantity;
          if (!newProducts[i].quantity) {
            continue;
          } else {
            axios
              .put('/api/sales', { name : products[i].name, quantity : products[i].quantity})
              .then(() => {console.log('success')})
              .catch((err) => console.log(err))
          }
        }
      })
    }
  }

  render() {
    return (
      <div>
        {this.state.clicked === false ? (
          <div>
            <div>
              <Products products={this.state.products} productClick={this.productClick}/>
            </div>
            <div>
              <CarryOutCart cart={this.state.products}/>
            </div>
            <div>
              <button onClick={this.purchaseHandler}>Checkout</button>
            </div>
          </div>
        ) : (
          <div>
            <div>
              <Checkout cart={this.state.products}/>
            </div>
            <div>
              <button onClick={() => this.salesHandler(this.state.products)}>Purchase</button> 
            </div>
          </div>
        )}
      </div>
    )
  }

}

export default App;