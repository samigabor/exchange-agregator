(this["webpackJsonpcoin-exchange"]=this["webpackJsonpcoin-exchange"]||[]).push([[0],{32:function(e,c,n){},34:function(e,c,n){},35:function(e,c,n){},36:function(e,c,n){},41:function(e,c,n){},43:function(e,c,n){"use strict";n.r(c);var t=n(2),r=n(0),a=n.n(r),i=n(10),s=n.n(i),o=(n(32),n(9)),l=n.n(o),u=n(14),j=n(21),h=n(20),b=n(15);n(34);function d(e){var c=Intl.NumberFormat("es-US",{style:"currency",currency:"USD"}).format(e.price);return Object(t.jsxs)("tr",{children:[Object(t.jsx)("td",{children:Object(t.jsxs)("div",{className:"d-flex",children:[Object(t.jsx)("div",{className:"d-flex justify-content-center coin-icon-container",children:Object(t.jsx)("i",{className:"crypto crypto-".concat(e.ticker.toLowerCase()," coin-icon")})}),Object(t.jsxs)("div",{children:[Object(t.jsx)("p",{className:"coin-ticker",children:e.ticker}),Object(t.jsx)("p",{className:"coin-name",children:e.name})]})]})}),Object(t.jsx)("td",{children:Object(t.jsx)("p",{className:"text-right m-0",children:e.showBalance?e.balance:null})}),Object(t.jsx)("td",{children:Object(t.jsx)("p",{className:"text-right m-0",children:c})}),Object(t.jsx)("td",{children:Object(t.jsx)("div",{className:"text-right pl-2 pr-2",children:Object(t.jsx)("img",{role:"button",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAApwAAAKcBDzod3AAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAALbSURBVEiJpZZLSFRRGMd/35mspIdDEUERtagWCS2CSFoVPYnUxCwQA6O0lzWQBukgZpM9SCOzopwIKVqkCx9FkUUZFD3sQat2SQY9FuUjonK652vTTGLj3Cv9t9/5/3/fd+8951xRVbwqWHN6lU+d3oMlgSdePcbrwvLjdStFtUXxJXvuyCsgWHNmhQqtwNiRhAOI2yMqr65brtAGJAMIdCvSaMRpPFgc6PwvQPDEqWVi5Vo0PI66BBrV+M4c2rvz3YgAlSdP+iO/fF2A361L4Iuobgrt23NjaMH3ITWQkp6a/HNoYUla2o97jztfo2QDPhdAMiK5dx8+HX3ufff9nNTUWNdGx0j2cK7Q3qI2MZIDDHiYQhDK5nZ/vF159uz4vwAlN5FrKERFViNmlsUsFiEbtBh4GzMoSyPfnboYtaC1540xZJ1b63+VCFR+4nSGWm0SZFWopKhjcK2ysmHswLivAYEyYCKAiGSFiotajMBL62ie2/zRSRzkn/dVUZH/o6pk9zEbYTbwAMCqlv2Z4EspSJlaWRJel/LcDeSmYG3tVCLmhcA0LIuMOrYFGC9GbxY2f52byLyhyfVroioQ+KSY9cCAGF1jwlmTX6PaDkzBOO07rn+ePpx5clLvjIJrfUfcIIdLdj1S9IBiFhoA8RECLMLMX3bUs8K2ntKtTf2T4plFdb8XCEl6EdF5sZ1c2NZ3GLR00JJvAg0Y7qjSo6o9ChMM8gBARY6G01NK42VHVV596krsNJWPKRXAlUH1cQq71NKM0iHIq2i450mMuRoDnC8kUp/hz1PVIrztXFdIX5LeinvYbWvtX4TYJoUZHjiOhYUXMvwv4xXjXjjnMyc+wfgWqGgQSLTDraL5w4WDhwsHYPv1/jmOOjmishGYHw1HyK9P919O5PUEiGpHS+8sx9AFWFU2hzP9l9w8ozyn/5VF2BLOcA+HEfxVAPwU66iytT7d3+DV8xsnIjcaBrCoXwAAAABJRU5ErkJggg==",alt:"Refresh",onClick:function(){return e.refreshPrice(e.id)}})})})]})}n(35);function f(e){var c=Intl.NumberFormat("es-US",{style:"currency",currency:"USD"}),n=e.showBalance?Object(t.jsx)("span",{children:c.format(e.balance)}):null;return Object(t.jsxs)(t.Fragment,{children:[Object(t.jsxs)("div",{className:"d-flex justify-content-between align-items-center search-container",children:[Object(t.jsx)("input",{type:"text",className:"search-input",placeholder:"Search",onChange:e.filterCoins}),n]}),Object(t.jsx)("div",{className:"coins-container",children:Object(t.jsx)("table",{children:Object(t.jsx)("tbody",{children:e.coins.map((function(c){var n=c.id,r=c.name,a=c.ticker,i=c.balance,s=c.price;return Object(t.jsx)(d,{id:n,name:r,ticker:a,balance:i,price:s,showBalance:e.showBalance,refreshPrice:e.refreshPrice},n)}))})})})]})}var p=n(26),m=n(24),A=n(13);n(36);function O(e){return Object(t.jsxs)(A.a,{bg:"dark",variant:"dark",children:[Object(t.jsx)(A.a.Brand,{href:"#home",children:"Agregator"}),Object(t.jsx)(A.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(t.jsxs)(A.a.Collapse,{id:"basic-navbar-nav",children:[Object(t.jsx)(m.a,{className:"mr-auto"}),Object(t.jsx)(m.a,{children:Object(t.jsx)(p.a,{id:"switchBalance",type:"switch",checked:e.showBalance,onChange:e.handleShowBalance,label:"Balance"})})]})]})}n(41);var x="https://api.coinpaprika.com/v1";var v=function(){var e=Object(r.useState)(1e4),c=Object(b.a)(e,2),n=c[0],a=c[1],i=Object(r.useState)(!1),s=Object(b.a)(i,2),o=s[0],d=s[1],p=Object(r.useState)([]),m=Object(b.a)(p,2),A=m[0],v=m[1],g=Object(r.useState)([]),w=Object(b.a)(g,2),S=w[0],C=w[1],B=function(e){return fetch("".concat(x,"/ticker/").concat(e)).then((function(e){return e.json()}))},N=function(){var e=Object(h.a)(l.a.mark((function e(c){var n,t,r,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=c.slice(0,10),t=c.slice(10),e.next=4,Promise.all(n.map((function(e){return B(e.id)})));case 4:r=e.sent,a=n.map((function(e,c){return Object(j.a)(Object(j.a)({},e),{},{price:Number(r[c].price_usd)})})),C([].concat(Object(u.a)(a),Object(u.a)(t))),v([].concat(Object(u.a)(a),Object(u.a)(t)));case 8:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),F=function(){var e=Object(h.a)(l.a.mark((function e(c){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:B(c).then((function(e){var n=S.map((function(n){var t=Object(j.a)({},n);return n.id===c&&(t.price=Number(e.price_usd)),t}));C(n)}));case 1:case"end":return e.stop()}}),e)})));return function(c){return e.apply(this,arguments)}}(),y=function(){var e=Object(h.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"/coins")).then((function(e){return e.json()})).then((function(e){var c=e.slice(0,100).map((function(e){return{id:e.id,name:e.name,ticker:e.symbol,balance:Math.round(1e4*Math.random())/100,price:0}})),n=c.map((function(e){return e.balance}));a(n.reduce((function(e,c){return e+c}),0)),v(c),C(c),N(c)})).catch((function(e){return console.log("Get all coins error:",e)}));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(r.useEffect)((function(){0===A.length&&y()})),Object(t.jsxs)("div",{className:"App",children:[Object(t.jsx)(O,{showBalance:o,handleShowBalance:function(){d(!o)}}),Object(t.jsx)(f,{coins:S,balance:n,showBalance:o,refreshPrice:F,filterCoins:function(e){var c=e.target.value.trim().toLowerCase(),n=A.filter((function(e){return"".concat(e.name.toLowerCase()," ").concat(e.ticker.toLowerCase()).includes(c)}));C(n)}})]})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(c){var n=c.getCLS,t=c.getFID,r=c.getFCP,a=c.getLCP,i=c.getTTFB;n(e),t(e),r(e),a(e),i(e)}))};n(42);s.a.render(Object(t.jsx)(a.a.StrictMode,{children:Object(t.jsx)(v,{})}),document.getElementById("root")),g()}},[[43,1,2]]]);
//# sourceMappingURL=main.bf161fd7.chunk.js.map