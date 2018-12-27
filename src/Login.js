import React, { Component } from 'react';
import logo from './logo.svg';
import './Login.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Login extends Component {
  constructor(props){
    super(props)
    this.state={
      username:'',
      password:'',
      loggingIn: false
    }
    this.usernameHandleChange=this.usernameHandleChange.bind(this)
    this.passwordHandleChange=this.passwordHandleChange.bind(this)
    this.handleSubmit=this.handleSubmit.bind(this)
  }
  usernameHandleChange(event){
    this.setState({username: event.target.value});
  }
  passwordHandleChange(event){
    this.setState({password: event.target.value});
  }
  handleSubmit(event){
    var that=this
    this.setState({
      loggingIn: true
    })
    event.preventDefault();
    console.log("submitted")
    axios.post('http://gerobakz-api.herokuapp.com/api/login', {
      username: this.state.username,
      password: this.state.password
    })
    .then(function (response) {
      if(response.data.hasOwnProperty('failed')){
        alert('Login Failed - Check Username & Password');
        that.setState({
          loggingIn: false
        })
      }
      else{
        sessionStorage.setItem('loggedIn',true)
        that.props.history.push('/')
      }
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  render() {
    return (
      <div className="App">
        <div className="login-form">
        <form onSubmit={this.handleSubmit}>
          <label className="username-input">
            Username:
            <input type="text" value={this.state.username} onChange={this.usernameHandleChange} />
          </label>
          <label className="password-input">
            Password:
            <input type="password" value={this.state.password} onChange={this.passwordHandleChange} />
          </label>
          <div className= "submit-button">
            {this.state.loggingIn ? <FontAwesomeIcon color="black" size="l" icon="spinner" spin/>:<input className="submit-button" type="submit" value="Submit" />}
          </div>
        </form>
        </div>
      </div>
    );
  }
}

export default Login;
