(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},29:function(e,t,a){e.exports=a(64)},34:function(e,t,a){},36:function(e,t,a){},59:function(e,t,a){},64:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(25),o=a.n(r),s=(a(34),a(68)),i=a(66),c=a(67),u=a(9),m=a(10),d=a(14),h=a(11),p=a(15),g=a(6),E=(a(19),a(36),a(12)),b=a.n(E),v=a(7),f=function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state={username:"",password:"",loggingIn:!1},a.usernameHandleChange=a.usernameHandleChange.bind(Object(g.a)(Object(g.a)(a))),a.passwordHandleChange=a.passwordHandleChange.bind(Object(g.a)(Object(g.a)(a))),a.handleSubmit=a.handleSubmit.bind(Object(g.a)(Object(g.a)(a))),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"usernameHandleChange",value:function(e){this.setState({username:e.target.value})}},{key:"passwordHandleChange",value:function(e){this.setState({password:e.target.value})}},{key:"handleSubmit",value:function(e){var t=this;this.setState({loggingIn:!0}),e.preventDefault(),console.log("submitted"),b.a.post("https://gerobakz-api.herokuapp.com/api/login",{username:this.state.username,password:this.state.password}).then(function(e){e.data.hasOwnProperty("failed")?(alert("Login Failed - Check Username & Password"),t.setState({loggingIn:!1})):(sessionStorage.setItem("loggedIn",!0),t.props.history.push("/"))}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("div",{className:"login-form"},l.a.createElement("form",{onSubmit:this.handleSubmit},l.a.createElement("label",{className:"username-input"},"Username:",l.a.createElement("input",{type:"text",value:this.state.username,onChange:this.usernameHandleChange})),l.a.createElement("label",{className:"password-input"},"Password:",l.a.createElement("input",{type:"password",value:this.state.password,onChange:this.passwordHandleChange})),l.a.createElement("div",{className:"submit-button"},this.state.loggingIn?l.a.createElement(v.a,{color:"black",size:"l",icon:"spinner",spin:!0}):l.a.createElement("input",{className:"submit-button",type:"submit",value:"Submit"})))))}}]),t}(n.Component),y=a(26),w=(a(59),a(61),function(e){function t(e){var a;return Object(u.a)(this,t),(a=Object(d.a)(this,Object(h.a)(t).call(this,e))).state=Object(y.a)({orders:[],loading:!0,nasgorQuantitySold:0,nasgorTotalPrice:0,airQuantitySold:0,airTotalPrice:0},"loading",!0),a}return Object(p.a)(t,e),Object(m.a)(t,[{key:"componentWillMount",value:function(){var e=sessionStorage.getItem("loggedIn");null!==e&&!1!==e||this.props.history.push("/login");var t=this;b.a.get("https://gerobakz-api.herokuapp.com/api/orders").then(function(e){var a=e.data;t.setState({orders:a,loading:!1}),console.log(a),t.calculateStuff()}).catch(function(e){console.log(e)}).then(function(){})}},{key:"renderOrderRows",value:function(){var e=[],t=this.state.orders;e.push(l.a.createElement("h1",null,t[0].user));for(var a=0;a<t.length;a++)e.push(l.a.createElement("p",null,"Item: ",t[a].order[0].item)),e.push(l.a.createElement("p",null,"Quantity: ",t[a].order[0].quantity)),e.push(l.a.createElement("p",null,"Time: ",t[a].time)),e.push(l.a.createElement("p",null,"Location: ",t[a].location.latitude," ",t[a].location.longitude)),e.push(l.a.createElement("p",null,"Total Price: Rp",t[a].totalPrice));return e}},{key:"calculateStuff",value:function(){for(var e=this.state.orders,t=0,a=0,n=0,l=0,r=0;r<e.length;r++)t+=e[r].order[0].quantity,a+=e[r].order[0].price,n+=e[r].order[1].quantity,l+=e[r].order[1].price;this.setState({nasgorQuantitySold:t,nasgorTotalPrice:a,airQuantitySold:n,airTotalPrice:l})}},{key:"render",value:function(){return l.a.createElement("div",{className:"App"},l.a.createElement("h1",null,this.state.loading?l.a.createElement(v.a,{color:"black",size:"l",icon:"spinner",spin:!0}):this.state.orders[this.state.orders.length-1].time),l.a.createElement("table",{className:"center"},l.a.createElement("tr",null,l.a.createElement("th",null,"Item"),l.a.createElement("th",null,"Quantity Sold"),l.a.createElement("th",null,"Total Price"),l.a.createElement("th",null,"Incentive Value (%)"),l.a.createElement("th",null,"Incentive Amount"),l.a.createElement("th",null,"Amount to be Deposited")),l.a.createElement("tr",null,l.a.createElement("td",null,"Nasi Goreng"),l.a.createElement("td",null,this.state.nasgorQuantitySold),l.a.createElement("td",null,this.state.nasgorTotalPrice),l.a.createElement("td",null,"5%"),l.a.createElement("td",null,.05*this.state.nasgorTotalPrice),l.a.createElement("td",null,this.state.nasgorTotalPrice-.05*this.state.nasgorTotalPrice)),l.a.createElement("tr",null,l.a.createElement("td",null,"Water (600ml)"),l.a.createElement("td",null,this.state.airQuantitySold),l.a.createElement("td",null,this.state.airTotalPrice),l.a.createElement("td",null,"0%"),l.a.createElement("td",null,"0"),l.a.createElement("td",null,this.state.airTotalPrice)),l.a.createElement("tr",null,l.a.createElement("td",null,"Total"),l.a.createElement("td",null,"N/A"),l.a.createElement("td",null,this.state.nasgorTotalPrice+this.state.airTotalPrice),l.a.createElement("td",null,"N/A"),l.a.createElement("td",null,.05*this.state.nasgorTotalPrice),l.a.createElement("td",null,this.state.nasgorTotalPrice-.05*this.state.nasgorTotalPrice+this.state.airTotalPrice))),l.a.createElement("h1",null,"This is your year 2019"),this.state.loading?l.a.createElement(v.a,{color:"black",size:"l",icon:"spinner",spin:!0}):this.renderOrderRows())}}]),t}(n.Component)),S=a(8),P=a(27);S.b.add(P.a);var T=function(){return l.a.createElement(s.a,null,l.a.createElement("div",null,l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement("li",null,l.a.createElement(i.a,{to:"/"},"Home")),l.a.createElement("li",null,l.a.createElement(i.a,{to:"/login/"},"Login")))),l.a.createElement(c.a,{path:"/",exact:!0,component:w}),l.a.createElement(c.a,{path:"/login/",component:f})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(l.a.createElement(T,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[29,2,1]]]);
//# sourceMappingURL=main.da9ae8c5.chunk.js.map