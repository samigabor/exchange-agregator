import React, { Component } from 'react';
import './App.css';
import Coins from './components/Coins/Coins';
import Header from './components/Header/Header';
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
        <Header />
        <AccountBalance amount={this.state.balance}/>
        <Coins coins={this.state.coins}/>
      </div>
    )
  }
}

export default App;
