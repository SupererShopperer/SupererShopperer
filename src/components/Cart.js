import React, { Component } from 'react';
import DeleteButton from './DeleteButton';
import { Link } from 'react-router-dom';
import FlatButton from 'material-ui/FlatButton';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

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

  constructor(props) {
    super(props);
    this.state = {open: false};
  }
  handleToggle = () => this.setState({open: !this.state.open});

  render() {
    let itemsArray = this.props.addedToCart.map((item, index) => {
      return (
        <MenuItem>
          <span style={{float: 'left', alignItems: 'left', display: 'flex'}}>
          <DeleteButton
          removeButtonHandler={this.props.removeButtonHandler}
          item={item}
          index={index}
         />
         <div style={{overflow: 'hidden', width: '150px'}}>
         {item.title}
         </div>
         </span>
         <span style={{float: 'right'}}>
         $ {item.price}
         </span>
        </MenuItem>
      )
      
      // <div key={index}>
      //   <span style={{float: 'left', alignItems: 'left', display: 'flex'}}>
      //     {/* <button onClick={() => this.props.removeButtonHandler(index, item.price)}> X </button> */}
      //     <DeleteButton 
      //       removeButtonHandler={this.props.removeButtonHandler}
      //       item={item}
      //       index={index}
      //       />
      //     &nbsp;
      //     {item.title}
      //   </span>
      //   <span style={{float: 'right'}}>
      //     {item.price}
      //   </span>
      //   <br />
      //   <br />
      // </div>;
    });

    return (

      <div>
        <RaisedButton
        label="Shopping Cart"
        onClick={this.handleToggle}
        />
        <Drawer open={this.state.open} width={300} openSecondary={true}>
          {itemsArray}
          Total: {'$ ' + this.props.total}<br/>
          <Link to='/checkout'><FlatButton label="CHECKOUT" primary={true} hoverColor='#3a5d72' /></Link>
        </Drawer>
      </div>

      // <div style={styles}>
      //   <h3>Shopping Cart</h3>
      //   <div>{itemsArray}</div>
      //   <div style={totalStyle}>
      //     <span style={{textAlign: 'left'}}>
      //       Total: &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      //     </span>
      //     <span style={{textAlign: 'right'}}>
      //       {'$ ' + this.props.total}
      //     </span>
      //     <span>
      //       <Link to='/checkout'><FlatButton label="CHECKOUT" style={{color: 'white'}} hoverColor='#3a5d72' /></Link>
      //       {/* <button onClick={() => {this.props.handleCheckout}}>CHECKOUT</button> */}
      //       </span>
      //   </div>
      // </div>
    );
  }
}

export default Cart;
