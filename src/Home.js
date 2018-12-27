import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import axios from 'axios';

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
    }
  }
  componentWillMount(){
    var loggedIn = sessionStorage.getItem('loggedIn')
    if (loggedIn===null||loggedIn===false){
      this.props.history.push('/login')
    }
  }

  render() {
    return (
      <div className="App">
        <h1>This is your year 2019</h1>
      </div>
    );
  }
}

export default Home;
