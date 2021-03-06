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
      closingStock:[],
      openingStock:[],
      loading: true,
      quantity: 0,
      price: 0,
      loading: true,
      incentive: 0,
      todaysData: [],
      todaysClosingStock: [{
        stock: [{bombayValue: 0,
        putihValue: 0,
        cBValue: 0,
        daunValue: 0,
        wjValue: 0,
        telorValue: 0,
        nsValue: 0,
        ayamValue: 0,
        fkValue: 0,
        gcValue: 0}]}],
      todaysOpeningStock: [{
        stock: [{bombayValue: 0,
        putihValue: 0,
        cBValue: 0,
        daunValue: 0,
        wjValue: 0,
        telorValue: 0,
        nsValue: 0,
        ayamValue: 0,
        fkValue: 0,
        gcValue: 0}]}]

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
      that.addTodaysSales()
      that.calculateStuff()

    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

    axios.get('https://gerobakz-api.herokuapp.com/api/opening_stock')
    .then(function (response) {
      // handle success
      var data=response.data
      that.setState({
        openingStock: data,
        loading: false
      })
      console.log(data)

      that.addTodaysOpeningStock()


    })
    .catch(function (error) {
      // handle error
      console.log(error);
    })
    .then(function () {
      // always executed
    });

    axios.get('https://gerobakz-api.herokuapp.com/api/closing_stock')
    .then(function (response) {
      // handle success
      var data=response.data
      that.setState({
        closingStock: data,
        loading: false
      })
      console.log(data)
      that.addTodaysClosingStock()

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
  addTodaysSales(){
    var data= this.state.orders
    var todaysData= []
    for (var i=0;i<data.length;i++){
      var momentData=moment(data[i].time)
      if(momentData.format("YYYY-MM-DD")==moment().format("YYYY-MM-DD")){
        todaysData.push(data[i])
      }
    }
    this.setState({
      todaysData: todaysData
    })
    this.calculateStuff()
    console.log("todaysData",todaysData)
  }
  addTodaysOpeningStock(){
    var data= this.state.openingStock
    var todaysOpeningStock= []
    for (var i=0;i<data.length;i++){
      var momentData=moment(data[i].time)
      if(momentData.format("YYYY-MM-DD")==moment().format("YYYY-MM-DD")){
        todaysOpeningStock.push(data[i])
      }
    }
    if (todaysOpeningStock.length!=0){
      this.setState({
        todaysOpeningStock: todaysOpeningStock
      })
    }

    console.log("todaysOpeningStock",todaysOpeningStock)
  }
  addTodaysClosingStock(){
    var data= this.state.closingStock
    var todaysClosingStock= []
    for (var i=0;i<data.length;i++){
      var momentData=moment(data[i].time)
      if(momentData.format("YYYY-MM-DD")==moment().format("YYYY-MM-DD")){
        todaysClosingStock.push(data[i])
      }
    }
    if (todaysClosingStock.length!=0){
      this.setState({
        todaysClosingStock: todaysClosingStock
      })
    }

    console.log("todaysClosingStock",todaysClosingStock)
  }
  calculateStuff() {
    var orders = this.state.todaysData
    var quantity = 0
    var price = 0
    var incentive=0
    for (var i=0;i<orders.length;i++){
      quantity = quantity + orders[i].order[0].quantity
      price = price + orders[i].order[0].price
    }
    if (quantity < 16){
      incentive = 0
    }
    else if (quantity <24){
      incentive = 5
    }
    else if (quantity < 32){
      incentive = 10
    }
    else if (quantity < 40){
      incentive = 15
    }
    else{
      incentive = 20
    }
    this.setState({
      quantity: quantity,
      price: price,
      incentive: incentive
    })
  }
  render() {

    return (
      <div className="App">

      <h1>{this.state.loading ? <FontAwesomeIcon color="black" size="l" icon="spinner" spin/>: moment().format("YYYY-MM-DD dddd HH:mm:ss")}</h1>

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
          <td>{this.state.quantity}</td>
          <td>{(this.state.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td>{this.state.incentive}%</td>
          <td>{(this.state.incentive*this.state.price/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
          <td>{(this.state.price-this.state.incentive*this.state.price/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</td>
        </tr>
      </table>
      <h1>Opening Stock(grams)</h1>
      <table className="center">
        <tr>
          <th>Bawang Bombay</th>
          <th>Bawang Putih</th>
          <th>Cabe</th>
          <th>Daun Bawang</th>
          <th>Wijen</th>
          <th>Telor</th>
          <th>Nasi</th>
          <th>Ayam</th>
          <th>Furikake</th>
          <th>Garlic Chips</th>
        </tr>
        <tr>
          <td>{this.state.todaysOpeningStock[0].stock[0].bombayValue}</td>
          <td>{this.state.todaysOpeningStock[0].stock[0].putihValue}</td>
          <td>{this.state.todaysOpeningStock[0].stock[0].cBValue}</td>
          <td>{this.state.todaysOpeningStock[0].stock[0].daunValue}</td>
          <td>{this.state.todaysOpeningStock[0].stock[0].wjValue}</td>
          <td>{this.state.todaysOpeningStock[0].stock[0].telorValue}</td>
          <td>{this.state.todaysOpeningStock[0].stock[0].nsValue}</td>
          <td>{this.state.todaysOpeningStock[0].stock[0].ayamValue}</td>
          <td>{this.state.todaysOpeningStock[0].stock[0].fkValue}</td>
          <td>{this.state.todaysOpeningStock[0].stock[0].gcValue}</td>
        </tr>
      </table>



      <h1>Closing Stock(grams)</h1>
      <table className="center">
        <tr>
          <th>Bawang Bombay</th>
          <th>Bawang Putih</th>
          <th>Cabe</th>
          <th>Daun Bawang</th>
          <th>Wijen</th>
          <th>Telor</th>
          <th>Nasi</th>
          <th>Ayam</th>
          <th>Furikake</th>
          <th>Garlic Chips</th>
        </tr>
        <tr>
          <td>{this.state.todaysClosingStock[0].stock[0].bombayValue}</td>
          <td>{this.state.todaysClosingStock[0].stock[0].putihValue}</td>
          <td>{this.state.todaysClosingStock[0].stock[0].cBValue}</td>
          <td>{this.state.todaysClosingStock[0].stock[0].daunValue}</td>
          <td>{this.state.todaysClosingStock[0].stock[0].wjValue}</td>
          <td>{this.state.todaysClosingStock[0].stock[0].telorValue}</td>
          <td>{this.state.todaysClosingStock[0].stock[0].nsValue}</td>
          <td>{this.state.todaysClosingStock[0].stock[0].ayamValue}</td>
          <td>{this.state.todaysClosingStock[0].stock[0].fkValue}</td>
          <td>{this.state.todaysClosingStock[0].stock[0].gcValue}</td>
        </tr>
      </table>

      </div>
    )
  }
}

export default Home;
