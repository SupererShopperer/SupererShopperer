import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const styles = {
  height: '100px',
  width: '300px',
  backgroundColor: '#b1cbdb',
  border: '1px solid',
  borderRadius: '6px',
  color: '#3a5d72',
  textAlign: 'center',
  marginBottom: '5px',
}

class Product extends Component {
  render() {
    const handleProductSelection = this.props.handleProductSelection
    return (
      <Link
        to='/item'
        onClick={() => handleProductSelection(this.props.productId)}
        >
        <div style={styles}>
          <h3>{this.props.title}</h3>
          <p>{this.props.price}</p>
        </div>
      </Link>
    );
  }
}

export default Product;
