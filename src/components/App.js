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
import ProductList from './ProductList';
import ItemDetail from './ItemDetail';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      url: 'http://localhost:8080/',
      products: [],
      productId: '',
      addedToCart: [{ _id: 3, title: 'canola oil', price: '$5.95'},
        { _id: 4, title: 'beach sand', price: '$3,000.00'}],
      total: 3005.95
    }
    this.handleSearch = this.handleSearch.bind(this);
    this.handleProductSelection = this.handleProductSelection.bind(this);
    this.removeButtonHandler = this.removeButtonHandler.bind(this);
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
  console.log(searchParam)
  axios.post('http://localhost:8080/findItems', {
  searchWord: searchParam
})
.then((response) => {
  this.setState((prevState, props) => {
    return {
      products: response.data,
    }
  })
})
.catch(function (error) {
  console.log(error);
});
}

handleProductSelection(productId) {
  console.log('the item was clicked')
  this.setState((prevState, props) => {
    return {productId: productId};
  })
}

removeButtonHandler(index) {
  console.log(index);
  this.setState({
    addedToCart: update(this.state.addedToCart, {$splice: [[index, 1]]})
  });
}

render() {
  const products = this.state.products;
  const productId = this.state.productId;
  const handleProductSelection = this.handleProductSelection;
  const handleSearch = this.handleSearch;
  const itemsInCart = this.itemsInCart;
  const totalInCart = this.totalInCart;
  return (
    <div className="App">
      <Header />
      <SearchBar handleSearch={handleSearch} />
      <Cart removeButtonHandler={this.removeButtonHandler}
              addedToCart={this.state.addedToCart}
              total={this.state.total}
        />
      <Route
        exact path='/'
        render={(props) => <ProductList {...props} products={products} handleProductSelection={handleProductSelection} />}
        />
      <Route
        path='/search'
        render={(props) => <ProductList {...props} products={products} handleProductSelection={handleProductSelection} />}
        />
      <Route
        path='/item'
        render={(props) => <ItemDetail {...props} productId={productId} />}
        />
    </div>
  );
}
}

export default App;
