import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import homeLogo from '../img/homeIcon.png';
import RaisedButton from 'material-ui/RaisedButton';
import Popover from 'material-ui/Popover';
import TextField from 'material-ui/TextField';


const styles = {
  width: '100%',
  height: '75px',
  backgroundColor: '#3a5d72',
  color: 'white',
}

const style = {
  margin: 15,
};

const imgStyle = {
  height: '50px',
  width: '50px',
  position: 'absolute',
  left: '10px',
  top: '10px',
}

class Header extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      username: '',
      password: ''
    };
 
  }

  handleTouchTap = (event) => {
    // This prevents ghost click.
    event.preventDefault();

    this.setState({
      open: true,
      anchorEl: event.currentTarget,
    });
  };

  handleRequestClose = () => {
    this.setState({
      open: false,
    });
  };

  handleClick(event) {
    const apiBaseUrl = "http://localhost:8080/api";
    const payload={
        "username": this.state.username,
        "password": this.state.password
    } 

    axios.post(apiBaseUrl + '/login', payload)
    .then(function(response) {
        console.log(response);
        if(response.data.code === 200) {
            console.log('LOGIN SUCCESSFUL BITCH!');
        }
        else if(response.data.code === 204) {
            console.log("WRONG PASSWORD USERNAME YO!");
            alert('username and password don\'t match');
        } else {
            console.log('TIME TO MAKE A USERNAME YAY');
            alert('Username does not exist');
        }
    })
    .catch(function(err) {
        console.log('this is the error: ', err);
    });
}

  handleGithub(event) {
      console.log('running handleGithub');
      axios.get('https://github.com/login/oauth/authorize?scope=user:email&amp;client_id=174cd191ab6c866f3007', { crossdomain: true })
          .then(function(response) {
              console.log(response);
          })
          .catch(function(err) {
              console.log('git error: ' + err);
          })
  }

  render() {
    return (
      <div style={styles}>
        <Link to='/'>
          <img style={imgStyle} src={homeLogo} />
        </Link>
        <br/>
        
        <RaisedButton
        containerElement={<Link to="/" />}
        onClick={this.handleTouchTap}
        linkButton={true}
        label="Login"
        primary={true} 
        />
        <Popover
          open={this.state.open}
          anchorEl={this.state.anchorEl}
          anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
          targetOrigin={{horizontal: 'left', vertical: 'top'}}
          onRequestClose={this.handleRequestClose}
        >
        <TextField
          hintText="Enter you Username"
          floatingLabelText="Username"
          onChange = {(event, newValue) => this.setState({username: newValue})}
        />

        <br/>

       <TextField
          type="password"
          hintText="Enter you Password"
          floatingLabelText="Password"
          onChange = {(event, newValue) => this.setState({password: newValue})}
        />
        <br/>

        <RaisedButton 
          label="Submit" 
          primary={true} 
          style={style} 
          onClick={(event) => {this.handleClick(event)}} 
        />

        <a href="https://github.com/login/oauth/authorize?scope=user:email&amp;client_id=174cd191ab6c866f3007">
          <RaisedButton 
            label="Login with GitHub" 
            primary={true} 
            style={style} 
          />
        </a>

        <Link to = '/register'>
        <RaisedButton
          label="Register"
          linkButton={true}
          primary={true} 
          style={style} 
          onClick={(event) => {this.handleClick(event)}} 
        />
        </Link>
        
      </Popover>
    </div>
    );
  }
}

export default Header;
