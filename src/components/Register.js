import Login from './Login';
import React, { Component } from 'react';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Register extends Component {
  constructor(props){
    super(props);
    this.state={
      firstname:'',
      lastname:'',
      username:'',
      password:''
    }
  }

  handleClick(event){
    let apiBaseUrl = "http://localhost:8080/api";
    console.log("values",this.state.firstname,this.state.lastname,this.state.username,this.state.password);
    //To be done:check for empty values before hitting submit
    let self = this;
    let payload={
        "firstname": this.state.firstname,
        "lastname": this.state.lastname,
        "username": this.state.username,
        "password": this.state.password
    }
    axios.post(apiBaseUrl + '/register', payload)
   .then(function (response) {
     console.log(response);
     if(response.data.code === 200){
       console.log('This is from the handleClick func')
     }
   })
   .catch(function (error) {
     console.log('This is from the handleClick func', error);
   });
  }

  render() {

    return (
      <div>
          <AppBar
             title="Register"
           />
           <TextField
             hintText="Enter your First Name"
             floatingLabelText="First Name"
             onChange = {(event,newValue) => this.setState({firstname: newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Last Name"
             floatingLabelText="Last Name"
             onChange = {(event,newValue) => this.setState({lastname: newValue})}
             />
           <br/>
           <TextField
             hintText="Enter your Email"
             type="email"
             floatingLabelText="Email"
             onChange = {(event,newValue) => this.setState({username: newValue})}
             />
           <br/>
           <TextField
             type = "password"
             hintText="Enter your Password"
             floatingLabelText="Password"
             onChange = {(event,newValue) => this.setState({password: newValue})}
             />
           <br/>
           <RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
      </div>
    )
  }
}
const style = {
  margin: 15,
};

export default Register;
