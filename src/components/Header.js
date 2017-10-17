import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import homeLogo from '../img/homeIcon.png';

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
        <a href="https://github.com/login/oauth/authorize?scope=user:email&amp;client_id=174cd191ab6c866f3007"><button className="oAuth">BUTTON</button></a>
      </div>
    );
  }
}

export default Header;
