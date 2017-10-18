import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeLogo from '../img/homeIcon.png';
import RaisedButton from 'material-ui/RaisedButton';

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
          <img style={imgStyle} src={homeLogo} />
        </Link>
        <br/>
        <RaisedButton
        containerElement={<Link to="/login" />}
        linkButton={true}
        label="Login"
        primary={true} 
        />
      </div>
    );
  }
}

export default Header;
