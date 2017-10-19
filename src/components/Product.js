import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Paper from 'material-ui/Paper';

// const styles = {
//   display: 'inline-block',
//   height: '100px',
//   width: '300px',
//   backgroundColor: '#b1cbdb',
//   border: '1px solid',
//   borderRadius: '6px',
//   color: '#3a5d72',
//   textAlign: 'center',
//   // marginBottom: '5px',
//   margin: '10px',
// }

const itemStyle = {
  display: 'inline-block',
  height: '300px',
  width: '300px',
  backgroundColor: '#b1cbdb',
  // border: '1px solid',
  borderRadius: '6px',
  color: '#3a5d72',
  textAlign: 'center',
  // marginBottom: '5px',
  margin: '20px',
  padding: '10px'
}

class Product extends Component {
  render() {
    const handleProductSelection = this.props.handleProductSelection
    return (
      
      <Link
        to='/item'
        onClick={() => handleProductSelection(this.props.productId)}
        >
        <Paper style={itemStyle} zDepth={3}>
        {/* <div style={styles}> */}
        <img src={this.props.img} height='200px' alt=""/>
          <h3>{this.props.title}</h3>
          <p>$ {this.props.price.toLocaleString()}</p>
        {/* </div> */}
        </Paper>
      </Link>
    );
  }
}

export default Product;
