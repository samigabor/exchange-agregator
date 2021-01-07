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
  
  refreshPrice = (tickerSelected) => {
    const updatedCoins = this.state.coins.map(({ name, ticker, price }) => {
      let newPrice = price;
      if (ticker === tickerSelected) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = Math.round(newPrice * randomPercentage * 1000) / 1000;
      }
      return {
        name,
        ticker,
        price: newPrice
      }
    });
    this.setState({coins: updatedCoins});
  }
    
  render() {
    return (
      <div className="App">
        <Header />
        <AccountBalance amount={this.state.balance}/>
        <Coins coins={this.state.coins} refreshPrice={this.refreshPrice}/>
      </div>
    )
  }
}

export default App;
