import React, { Component } from 'react';
import logo from './logo.svg';
import './Home.css';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import moment from 'moment'


class Home extends Component {
  constructor(props){
    super(props)
    this.state={
      orders: [],
      loading: true,
      quantitySold: 0,
      totalPrice: 0,
      loading: true
    }
  }
  componentWillMount(){
    var loggedIn = sessionStorage.getItem('loggedIn')
    if (loggedIn===null||loggedIn===false){
      this.props.history.push('/login')
    }
    var that=this
    axios.get('https://gerobakz-api.herokuapp.com/api/orders')
    .then(function (response) {
      // handle success
      var data=response.data
      that.setState({
        orders: data,
        loading: false
      })
      console.log(data)
      that.calculateStuff()

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

  calculateStuff() {
    var orders = this.state.orders
    var quantitySold = 0
    var totalPrice = 0
    for (var i=0;i<orders.length;i++){
      quantitySold = quantitySold + orders[i].order[0].quantity
      totalPrice = totalPrice + orders[i].totalPrice
    }
    this.setState({
      quantitySold: quantitySold,
      totalPrice: totalPrice
    })
  }
  render() {

    return (
      <div className="App">

      <h1>{this.state.loading ? <FontAwesomeIcon color="black" size="l" icon="spinner" spin/>: this.state.orders[this.state.orders.length-1].time}</h1>

      <table className="center">
        <tr>
          <th>Item</th>
          <th>Quantity Sold</th>
          <th>Total Price</th>
          <th>Incentive Value (%)</th>
          <th>Incentive Amount</th>
          <th>Amount to be Deposited</th>
        </tr>
        <tr>
          <td>Nasi Goreng</td>
          <td>{this.state.quantitySold}</td>
          <td>{this.state.totalPrice}</td>
          <td>5%</td>
          <td>{0.05*this.state.totalPrice}</td>
          <td>{this.state.totalPrice-0.05*this.state.totalPrice}</td>
        </tr>
        <tr>
          <td>Water (600ml)</td>
          <td>1</td>
          <td>3,000</td>
          <td>0%</td>
          <td>0</td>
          <td>3,000</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>N/A</td>
          <td>403,000</td>
          <td>N/A</td>
          <td>20,000</td>
          <td>383,000</td>
        </tr>
      </table>

        <h1>This is your year 2019</h1>
        {this.state.loading ? <FontAwesomeIcon color="black" size="l" icon="spinner" spin/>: this.renderOrderRows()}
      </div>
    )
  }
}

export default Home;
