import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      orders: [],
      loading: true
    }
  }
  componentWillMount(){
    var loggedIn = sessionStorage.getItem('loggedIn')
    if (loggedIn===null||loggedIn===false){
      this.props.history.push('/login')
    }
    var that=this
    axios.get('http://gerobakz-api.herokuapp.com/api/orders')
    .then(function (response) {
      // handle success
      var data=response.data
      that.setState({
        orders: data,
        loading: false
      })
      console.log(data)
    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });
  }
  renderOrderRows(){
    var rows=[]
    var orders= this.state.orders
    rows.push(<h1>{orders[0].user}</h1>)
    for (var i=0;i<orders.length;i++){
      rows.push(<p>Item: {orders[i].order[0].item}</p>)
      rows.push(<p>Quantity: {orders[i].order[0].quantity}</p>)
      rows.push(<p>Time: {orders[i].time}</p>)
      rows.push(<p>Location: {orders[i].location.latitude} {orders[i].location.longitude}</p>)
      rows.push(<p>Total Price: Rp{orders[i].totalPrice}</p>)
    }
    return rows
  }

  render() {
    return (
      <div className="App">
        <h1>This is your year 2019</h1>
        {this.state.loading ? <FontAwesomeIcon color="black" size="l" icon="spinner" spin/>: this.renderOrderRows()}
      </div>
    );
  }
}

export default Home;
