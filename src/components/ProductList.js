import React, { Component } from 'react';
import Product from './Product';

const styles = {
  textAlign: 'left',
  width: '80%',
  display: 'inline-block',
  margin: '10px',
}

class ProductList extends Component {

  render() {

    const products = this.props.products.map((product) => {
      return <Product
        key={product._id}
        productId={product._id}
        title={product.title}
        price={product.price}
        handleProductSelection={this.props.handleProductSelection}
        />
    })

    return (
      <div style={styles}>
        <p>ProductList</p>
        {products}
      </div>
    );
  }
}

export default ProductList;
