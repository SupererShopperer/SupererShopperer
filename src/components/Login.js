import React, { Component } from 'react';
import axios from 'axios';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu';

const styles = {
    customWidth: {
      width: 400,
    },
    display: 'inline-block'
    
  };

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        }
        
    }
    
   

    handleClick(event) {
        const apiBaseUrl = "http://localhost:8080/api";
        const payload={
            "username": this.state.username,
            "password": this.state.password
        }
        axios.post(apiBaseUrl, payload)
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

    render () {
        return (
            <div className>
                  <DropDownMenu
                    onChange={this.handleChange}
                    style={styles.customWidth}
                    autoWidth={false}
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
                      onClick={(event) => this.handleClick(event)} 
                    />
                   <a href="https://github.com/login/oauth/authorize?scope=user:email&amp;client_id=174cd191ab6c866f3007">
                    <RaisedButton 
                      label="Login with GitHub" 
                      primary={true} 
                      style={style} 
                    />
                    </a>
                    <RaisedButton
                      label="Register"
                      linkButton={true}
                      primary={true} 
                      style={style} 
                      onClick={(event) => this.handleClick(event)} 
                    />
                </DropDownMenu>

            </div>
        )
    }
}

const style = {
    margin: 15,
};

export default Login;
