import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';

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
      return <div key={index}>
        <span style={{float: 'left', alignItems: 'left', display: 'flex'}}>
          {/* <button onClick={() => this.props.removeButtonHandler(index, item.price)}> X </button> */}
          <DeleteButton 
            removeButtonHandler={this.props.removeButtonHandler}
            item={item}
            index={index}
            />
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
          <span>
            <Link to='/checkout'><FlatButton label="CHECKOUT" style={{color: 'white'}} hoverColor='#3a5d72' /></Link>
            {/* <button onClick={() => {this.props.handleCheckout}}>CHECKOUT</button> */}
            </span>
        </div>
      </div>
    );
  }
}

export default Cart;
