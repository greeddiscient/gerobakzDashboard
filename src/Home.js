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
      nasgorQuantitySold: 0,
      nasgorTotalPrice: 0,
      airQuantitySold: 0,
      airTotalPrice: 0,
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
    var nasgorQuantitySold = 0
    var nasgorTotalPrice = 0
    var airQuantitySold=0
    var airTotalPrice = 0
    for (var i=0;i<orders.length;i++){
      nasgorQuantitySold = nasgorQuantitySold + orders[i].order[0].quantity
      nasgorTotalPrice = nasgorTotalPrice + orders[i].order[0].price
      airQuantitySold = airQuantitySold + orders[i].order[1].quantity
      airTotalPrice = airTotalPrice + orders[i].order[1].price
    }
    this.setState({
      nasgorQuantitySold: nasgorQuantitySold,
      nasgorTotalPrice: nasgorTotalPrice,
      airQuantitySold: airQuantitySold,
      airTotalPrice: airTotalPrice
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
          <td>{this.state.nasgorQuantitySold}</td>
          <td>{this.state.nasgorTotalPrice}</td>
          <td>5%</td>
          <td>{0.05*this.state.nasgorTotalPrice}</td>
          <td>{this.state.nasgorTotalPrice-0.05*this.state.nasgorTotalPrice}</td>
        </tr>
        <tr>
          <td>Water (600ml)</td>
          <td>{this.state.airQuantitySold}</td>
          <td>{this.state.airTotalPrice}</td>
          <td>0%</td>
          <td>0</td>
          <td>{this.state.airTotalPrice}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td>N/A</td>
          <td>{this.state.nasgorTotalPrice+this.state.airTotalPrice}</td>
          <td>N/A</td>
          <td>{0.05*this.state.nasgorTotalPrice}</td>
          <td>{this.state.nasgorTotalPrice-0.05*this.state.nasgorTotalPrice+this.state.airTotalPrice}</td>
        </tr>
      </table>

        <h1>This is your year 2019</h1>
        {this.state.loading ? <FontAwesomeIcon color="black" size="l" icon="spinner" spin/>: this.renderOrderRows()}
      </div>
    )
  }
}

export default Home;
