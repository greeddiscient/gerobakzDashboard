(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{20:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},29:function(e,t,a){e.exports=a(63)},34:function(e,t,a){},36:function(e,t,a){},59:function(e,t,a){},63:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(26),s=a.n(o),c=(a(34),a(65)),i=a(66),r=a(12),u=a(13),d=a(15),p=a(14),h=a(16),m=a(5),g=(a(20),a(36),a(8)),k=a.n(g),y=a(10),S=function(e){function t(e){var a;return Object(r.a)(this,t),(a=Object(d.a)(this,Object(p.a)(t).call(this,e))).state={username:"",password:"",loggingIn:!1},a.usernameHandleChange=a.usernameHandleChange.bind(Object(m.a)(Object(m.a)(a))),a.passwordHandleChange=a.passwordHandleChange.bind(Object(m.a)(Object(m.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(Object(m.a)(a))),a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"usernameHandleChange",value:function(e){this.setState({username:e.target.value})}},{key:"passwordHandleChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;this.setState({loggingIn:!0}),e.preventDefault(),console.log("submitted"),k.a.post("https://gerobakz-api.herokuapp.com/api/login",{username:this.state.username,password:this.state.password}).then(function(e){e.data.hasOwnProperty("failed")?(alert("Login Failed - Check Username & Password"),t.setState({loggingIn:!1})):(sessionStorage.setItem("loggedIn",!0),t.props.history.push("/"))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"login-form"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",{className:"username-input"},"Username:",l.a.createElement("input",{type:"text",value:this.state.username,onChange:this.usernameHandleChange})),l.a.createElement("label",{className:"password-input"},"Password:",l.a.createElement("input",{type:"password",value:this.state.password,onChange:this.passwordHandleChange})),l.a.createElement("div",{className:"submit-button"},this.state.loggingIn?l.a.createElement(y.a,{color:"black",size:"l",icon:"spinner",spin:!0}):l.a.createElement("input",{className:"submit-button",type:"submit",value:"Submit"})))))}}]),t}(n.Component),E=a(9),b=(a(59),a(7)),f=a.n(b),v=function(e){function t(e){var a,n;return Object(r.a)(this,t),(n=Object(d.a)(this,Object(p.a)(t).call(this,e))).state=(a={orders:[],closingStock:[],openingStock:[],loading:!0,quantity:0,price:0},Object(E.a)(a,"loading",!0),Object(E.a)(a,"incentive",0),Object(E.a)(a,"todaysData",[]),Object(E.a)(a,"todaysClosingStock",[{stock:[{bombayValue:0,putihValue:0,cBValue:0,daunValue:0,wjValue:0,telorValue:0,nsValue:0,ayamValue:0,fkValue:0,gcValue:0}]}]),Object(E.a)(a,"todaysOpeningStock",[{stock:[{bombayValue:0,putihValue:0,cBValue:0,daunValue:0,wjValue:0,telorValue:0,nsValue:0,ayamValue:0,fkValue:0,gcValue:0}]}]),a),n}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentWillMount",value:function(){var e=sessionStorage.getItem("loggedIn");null!==e&&!1!==e||this.props.history.push("/login");var t=this;k.a.get("https://gerobakz-api.herokuapp.com/api/orders").then(function(e){var a=e.data;t.setState({orders:a,loading:!1}),console.log(a),t.addTodaysSales(),t.calculateStuff()}).catch(function(e){console.log(e)}).then(function(){}),k.a.get("https://gerobakz-api.herokuapp.com/api/opening_stock").then(function(e){var a=e.data;t.setState({openingStock:a,loading:!1}),console.log(a),t.addTodaysOpeningStock()}).catch(function(e){console.log(e)}).then(function(){}),k.a.get("https://gerobakz-api.herokuapp.com/api/closing_stock").then(function(e){var a=e.data;t.setState({closingStock:a,loading:!1}),console.log(a),t.addTodaysClosingStock()}).catch(function(e){console.log(e)}).then(function(){})}},{key:"renderOrderRows",value:function(){var e=[],t=this.state.orders;e.push(l.a.createElement("h1",null,t[0].user));for(var a=0;a<t.length;a++)e.push(l.a.createElement("p",null,"Item: ",t[a].order[0].item)),e.push(l.a.createElement("p",null,"Quantity: ",t[a].order[0].quantity)),e.push(l.a.createElement("p",null,"Time: ",t[a].time)),e.push(l.a.createElement("p",null,"Location: ",t[a].location.latitude," ",t[a].location.longitude)),e.push(l.a.createElement("p",null,"Total Price: Rp",t[a].totalPrice));return e}},{key:"addTodaysSales",value:function(){for(var e=this.state.orders,t=[],a=0;a<e.length;a++){f()(e[a].time).format("YYYY-MM-DD")==f()().format("YYYY-MM-DD")&&t.push(e[a])}this.setState({todaysData:t}),this.calculateStuff(),console.log("todaysData",t)}},{key:"addTodaysOpeningStock",value:function(){for(var e=this.state.openingStock,t=[],a=0;a<e.length;a++){f()(e[a].time).format("YYYY-MM-DD")==f()().format("YYYY-MM-DD")&&t.push(e[a])}0!=t.length&&this.setState({todaysOpeningStock:t}),console.log("todaysOpeningStock",t)}},{key:"addTodaysClosingStock",value:function(){for(var e=this.state.closingStock,t=[],a=0;a<e.length;a++){f()(e[a].time).format("YYYY-MM-DD")==f()().format("YYYY-MM-DD")&&t.push(e[a])}0!=t.length&&this.setState({todaysClosingStock:t}),console.log("todaysClosingStock",t)}},{key:"calculateStuff",value:function(){for(var e=this.state.todaysData,t=0,a=0,n=0,l=0;l<e.length;l++)t+=e[l].order[0].quantity,a+=e[l].order[0].price;n=t<16?0:t<24?5:t<32?10:t<40?15:20,this.setState({quantity:t,price:a,incentive:n})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,this.state.loading?l.a.createElement(y.a,{color:"black",size:"l",icon:"spinner",spin:!0}):f()().format("YYYY-MM-DD dddd HH:mm:ss")),l.a.createElement("table",{className:"center"},l.a.createElement("tr",null,l.a.createElement("th",null,"Item"),l.a.createElement("th",null,"Quantity Sold"),l.a.createElement("th",null,"Total Price"),l.a.createElement("th",null,"Incentive Value (%)"),l.a.createElement("th",null,"Incentive Amount"),l.a.createElement("th",null,"Amount to be Deposited")),l.a.createElement("tr",null,l.a.createElement("td",null,"Nasi Goreng"),l.a.createElement("td",null,this.state.quantity),l.a.createElement("td",null,this.state.price.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),l.a.createElement("td",null,this.state.incentive,"%"),l.a.createElement("td",null,(this.state.incentive*this.state.price/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")),l.a.createElement("td",null,(this.state.price-this.state.incentive*this.state.price/100).toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")))),l.a.createElement("h1",null,"Opening Stock"),l.a.createElement("p",null,"Bawang Bombay: ",this.state.todaysOpeningStock[0].stock[0].bombayValue),l.a.createElement("p",null,"Bawang Putih: ",this.state.todaysOpeningStock[0].stock[0].putihValue),l.a.createElement("p",null,"Cabe: ",this.state.todaysOpeningStock[0].stock[0].cBValue),l.a.createElement("p",null,"Daun Bawang: ",this.state.todaysOpeningStock[0].stock[0].daunValue),l.a.createElement("p",null,"Wijen: ",this.state.todaysOpeningStock[0].stock[0].wjValue),l.a.createElement("p",null,"Telor: ",this.state.todaysOpeningStock[0].stock[0].telorValue),l.a.createElement("p",null,"Nasi: ",this.state.todaysOpeningStock[0].stock[0].nsValue),l.a.createElement("p",null,"Ayam: ",this.state.todaysOpeningStock[0].stock[0].cBValue),l.a.createElement("p",null,"Furikake: ",this.state.todaysOpeningStock[0].stock[0].fkValue),l.a.createElement("p",null,"Garlic Chips: ",this.state.todaysOpeningStock[0].stock[0].gcValue),l.a.createElement("h1",null,"Closing Stock"),l.a.createElement("p",null,"Bawang Bombay: ",this.state.todaysClosingStock[0].stock[0].bombayValue),l.a.createElement("p",null,"Bawang Putih: ",this.state.todaysClosingStock[0].stock[0].putihValue),l.a.createElement("p",null,"Cabe: ",this.state.todaysClosingStock[0].stock[0].cBValue),l.a.createElement("p",null,"Daun Bawang: ",this.state.todaysClosingStock[0].stock[0].daunValue),l.a.createElement("p",null,"Wijen: ",this.state.todaysClosingStock[0].stock[0].wjValue),l.a.createElement("p",null,"Telor: ",this.state.todaysClosingStock[0].stock[0].telorValue),l.a.createElement("p",null,"Nasi: ",this.state.todaysClosingStock[0].stock[0].nsValue),l.a.createElement("p",null,"Ayam: ",this.state.todaysClosingStock[0].stock[0].cBValue),l.a.createElement("p",null,"Furikake: ",this.state.todaysClosingStock[0].stock[0].fkValue),l.a.createElement("p",null,"Garlic Chips: ",this.state.todaysClosingStock[0].stock[0].gcValue))}}]),t}(n.Component),V=a(11),O=a(27);V.b.add(O.a);var w=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(i.a,{path:"/",exact:!0,component:v}),l.a.createElement(i.a,{path:"/login/",component:S})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(l.a.createElement(w,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.1fdf2d11.chunk.js.map