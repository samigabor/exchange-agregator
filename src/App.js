import React, { Component } from 'react';
import './App.css';
import Coins from './components/Coins/Coins';
import Header from './components/Header/Header';
import AccountBalance from './components/AccountBalance/AccountBalance';

class App extends Component {
  state = {
    balance: 10000,
    showBalance: true,
    coins: []
  }

  componentDidMount() {
    fetch('https://api.coinpaprika.com/v1/coins')
      .then(response => response.json())
      .then(data => {
        const topCoins = data.splice(0, 10).map(coin => ({
          id: coin.id,
          name: coin.name,
          ticker: coin.symbol,
          balance: 0,
          price: 0
        }));
        this.setState({coins: topCoins});
        this.updateCoinPrices();
      })
      .catch(err => console.log('Paprika API errored on me :(', err));
  }

  handleShowBalance = () => {
    this.setState({showBalance: !this.state.showBalance});
  }

  updateCoinPrices = () => {
    for (let coin of this.state.coins) {
      this.refreshPrice(coin.id);
    }
  }
  
  refreshPrice = (coinId) => {
    fetch(`https://api.coinpaprika.com/v1/ticker/${coinId}`)
    .then(response => response.json())
    .then(coinData => {
      const updatedCoins = this.state.coins.map((coin) => {
        const newCoin = { ...coin };
        if (coin.id === coinId) {
          newCoin.price = Number(coinData.price_usd);
        }
        return newCoin;
      });
      this.setState({ coins: updatedCoins });
    });
  }
    
  render() {
    return (
      <div className="App">
        <Header />
        <AccountBalance
          amount={this.state.balance}
          showBalance={this.state.showBalance}
          handleShowBalance={this.handleShowBalance}
        />
        <Coins
          coins={this.state.coins}
          showBalance={this.state.showBalance}
          refreshPrice={this.refreshPrice}
        />
      </div>
    )
  }
}

export default App;
