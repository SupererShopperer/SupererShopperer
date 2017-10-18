// modules
import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import update from 'react-addons-update';
import axios from 'axios';
// styles
import '../styles/App.css';
// components
import Header from './Header';
import SearchBar from './SearchBar';
import Cart from './Cart';
import DeleteButton from './DeleteButton';
import ProductList from './ProductList';
import ItemDetail from './ItemDetail';
import Login from './Login';
import Register from './Register';
import Checkout from './Checkout';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'http://localhost:8080/',
      products: [],
      productId: '',
      addedToCart: [],
      total: 0

    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleProductSelection = this.handleProductSelection.bind(this);
    this.removeButtonHandler = this.removeButtonHandler.bind(this);
    this.addItemToCart = this.addItemToCart.bind(this);
    this.handleCheckout = this.handleCheckout.bind(this);
  }

  componentDidMount() {

    axios.get('http://localhost:8080/')
      .then((response) => {
        console.log("requesting information")
        this.setState({
          products: response.data,
        }
        )
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  handleSearch(searchParam) {
    console.log('searchParam', searchParam)
    axios.post('http://localhost:8080/findItems', {
      searchWord: searchParam
    })
      .then((response) => {
        this.setState((prevState, props) => {
          console.log('response', response.data);
          return {
            products: response.data,
          }
        })
      })
      .catch((error) => {
        console.log('error');
        this.setState({ products: [], })
      });
  }

  handleProductSelection(productId) {
    console.log('the item was clicked')
    this.setState((prevState, props) => {
      return { productId: productId };
    })
  }

addItemToCart(name, cost) {
  console.log('added item to cart');
  let cart = this.state.addedToCart;
  cart.push({title: name, price: cost});
  console.log('updated cart', cart);
  this.setState({
    total: this.state.total + cost,
    addedToCart: cart
  });
}
handleCheckout(e) {
  e.preventDefault();
  this.props.history.push('/checkout');
}

removeButtonHandler(index, cost) {
  console.log('index of removed???', index);
  console.log('cost', cost, 'typof', typeof cost);
  this.setState({
    total:(Math.round((this.state.total - cost) * 100)) / 100,
    addedToCart: update(this.state.addedToCart, {$splice: [[index, 1]]})
  });
}

render() {
  const products = this.state.products;
  const productId = this.state.productId;
  const handleProductSelection = this.handleProductSelection;
  const handleSearch = this.handleSearch;
  const addItemToCart = this.addItemToCart;
  const handleCheckout = this.handleCheckout;
  return (
    <MuiThemeProvider>
    <div className="App">
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <Cart removeButtonHandler={this.removeButtonHandler}
              addedToCart={this.state.addedToCart}
              total={this.state.total}
              handleCheckout={handleCheckout}
      />
     
      <Route
        exact path='/login'
        render={(props) => {
          return <Login {...props}  />
        }}
      />
      <Route 
        exact path='/register'
        render={(props) => {
          return <Register {...props} />
        }}
        />
       <Route
       exact path='/checkout'
       render={(props) => {
         return <Checkout {...props} addedToCart={this.state.addedToCart} removeButtonHandler={this.removeButtonHandler}/>
       }}
       />
       <Route
        exact path='/'
        render={(props) => {
          return <ProductList {...props} products={products} handleProductSelection={handleProductSelection} />
        }}
      />
      <Route
        path='/search'
        render={(props) => {
            // {/* <ProductList {...props} products={products} handleProductSelection={handleProductSelection} /> */}
          if (this.state.products.length === 0) {
            console.log('nothing there');
            return (
              <div>
                  NOTHING
              </div>
            )
          } else {
              console.log('rendering products still');
              return <ProductList {...props} products={products} handleProductSelection={handleProductSelection} />
          }
       }}
      />

      <Route
        path='/item'
        render={(props) => <ItemDetail {...props} productId={productId} addItemToCart={addItemToCart}/>}
        />
      
      </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
