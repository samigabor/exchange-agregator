import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      balance: 10000,
      coins: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          price: 37000
        },
        {
          name: 'Bitcoin Cash',
          ticker: 'BCH',
          price: 400
        },
        {
          name: 'Ether',
          ticker: 'ETH',
          price: 1200
        },
        {
          name: 'Theter',
          ticker: 'USDT',
          price: 1
        }
      ]
    }
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Coin Exchange</h1>
        </header>
        <AccountBalance amount={this.state.balance}/>
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.state.coins.map(({name, ticker, price}) => <Coin name={name} ticker={ticker} price={price} key={ticker}/>)
            }
          </tbody>
        </table>
      </div>
    )
  }
}

export default App;
