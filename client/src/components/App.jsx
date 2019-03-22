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

  salesHandler() {
    axios
      .get('/api/sales')
      .then((data) => {
        console.log(data);
        let newProducts = [...this.state.products];
        for(let i = 0; i < newProducts.length; i++) {
          if (!newProducts[i].quantity && !data.data[i].quantity) {
            continue;
          }
          else {
            newProducts[i].quantity += data.data[i].quantity;
            axios
              .put('/api/sales', { name : newProducts[i].name, quantity : newProducts[i].quantity})
              .then(() => {console.log('success')})
              .catch((err) => console.log(err))
          }
        }
      })
      .then(() => this.getProducts())
      .then(() => {
        this.setState({
          clicked: false
        })
      })
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
              <button onClick={() => this.salesHandler()}>Purchase</button> 
            </div>
          </div>
        )}
      </div>
    )
  }

}

export default App;