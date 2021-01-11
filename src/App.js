import React, { Component } from 'react';
import './App.css';
import Coins from './components/Coins/Coins';
import Header from './components/Header/Header';
import AccountBalance from './components/AccountBalance/AccountBalance';

class App extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      balance: 10000,
      showBalance: true,
      coins: [
        {
          name: 'Bitcoin',
          ticker: 'BTC',
          balance: 0.5,
          price: 37000
        },
        {
          name: 'Bitcoin Cash',
          ticker: 'BCH',
          balance: 0,
          price: 400
        },
        {
          name: 'Ether',
          ticker: 'ETH',
          balance: 32,
          price: 1200
        },
        {
          name: 'Theter',
          ticker: 'USDT',
          balance: 1000,
          price: 1
        }
      ]
    }
  }

  handleShowBalance = () => {
    this.setState({showBalance: !this.state.showBalance});
  }
  
  refreshPrice = (tickerSelected) => {
    const updatedCoins = this.state.coins.map(({ name, ticker, balance, price }) => {
      let newPrice = price;
      if (ticker === tickerSelected) {
        const randomPercentage = 0.995 + Math.random() * 0.01;
        newPrice = Math.round(newPrice * randomPercentage * 1000) / 1000;
      }
      return {
        name,
        ticker,
        balance,
        price: newPrice
      }
    });
    this.setState({coins: updatedCoins});
  }
    
  render() {
    return (
      <div className="App">
        <Header />
        <AccountBalance amount={this.state.balance} showBalance={this.state.showBalance} handleShowBalance={this.handleShowBalance}/>
        <Coins coins={this.state.coins} showBalance={this.state.showBalance} refreshPrice={this.refreshPrice}/>
      </div>
    )
  }
}

export default App;
