import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeLogo from '../img/homeIcon.png';
import RaisedButton from 'material-ui/RaisedButton';
import Cart from './Cart';
import SearchBar from './SearchBar';

const styles = {
  width: '100%',
  height: '75px',
  backgroundColor: '#3a5d72',
  color: 'white',
}

const imgStyle = {
  height: '50px',
  width: '50px',
  position: 'absolute',
  left: '10px',
  top: '10px',
}

class Header extends Component {
  render() {
    return (
      <div style={styles}>
        <Link to='/'>
          <img style={imgStyle} src={homeLogo} alt="Home"/>
        </Link>
        <br/>
        <div style={{display: 'inline-block', float: 'left', position: 'relative', left: '100px'}}>
        <RaisedButton
        containerElement={<Link to="/login" />}
        label="Login"
        primary={true} 
        />
        </div>
        <div style={{display: 'inline-block', float: 'left', position: 'relative', left: '150px'}}>
        <Cart removeButtonHandler={this.props.removeButtonHandler}
              addedToCart={this.props.addedToCart}
              total={this.props.total}
              handleCheckout={this.props.handleCheckout}
      />
      </div>
      <SearchBar handleSearch={this.props.handleSearch} />
      </div>
    );
  }
}

export default Header;
