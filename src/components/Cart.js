import React, { Component } from 'react';

const styles = {
  padding: '6px',
  position: 'absolute',
  right: '0px',
  top: '75px',
  height: '400px',
  width: '200px',
  backgroundColor: '#6d90a5',
  color: 'white',
}

const totalStyle = {
  display: 'inlineBlock',
  position: 'absolute',
  bottom: '5px',
}

class Cart extends Component {

  render() {
    let itemsArray = this.props.addedToCart.map((item, index) => {
      return <div>
        <span style={{float: 'left'}}>
          <button onClick={() => this.props.removeButtonHandler(index)}> X </button>
          &nbsp;
          {item.title}
        </span>
        <span style={{float: 'right'}}>
          {item.price}
        </span>
        <br />
        <br />
      </div>;
    });

    return (
      <div style={styles}>
        <h3>Shopping Cart</h3>
        <div>{itemsArray}</div>
        <div style={totalStyle}>
          <span style={{textAlign: 'left'}}>
            Total: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          </span>
          <span style={{textAlign: 'right'}}>
            {'$ ' + this.props.total}
          </span>
        </div>
      </div>
    );
  }
}

export default Cart;
