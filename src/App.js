import React, { useState, useEffect } from 'react';
import './App.css';
import Coins from './components/Coins/Coins';
import Header from './components/Header/Header';
import AccountBalance from './components/AccountBalance/AccountBalance';

const api = 'https://api.coinpaprika.com/v1';

function App() {
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(true);
  const [coins, setCoins] = useState([]);

  const toggleShowBalance = () => {
    setShowBalance(!showBalance);
  }

  const getAllCoins = () => {
    return fetch(`${api}/coins`).then(response => response.json());
  }

  const getCoinById = (coinId) => {
    return fetch(`${api}/ticker/${coinId}`).then(response => response.json());
  }

  const updateCoinPrices = async (coins) => {
    const prices = await Promise.all(coins.map(coin => getCoinById(coin.id)));
    const updatedCoins = coins.map((coin, index) => ({
      ...coin,
      price: Number(prices[index].price_usd)
    }));
    setCoins(updatedCoins);
  }
  
  const refreshPrice = async (coinId) => {
    getCoinById(coinId).then(coinData => {
      const updatedCoins = coins.map((coin) => {
        const newCoin = { ...coin };
        if (coin.id === coinId) {
          newCoin.price = Number(coinData.price_usd);
        }
        return newCoin;
      });
      setCoins(updatedCoins);
    });
  }

  const componentDidMount = async () => {
    await getAllCoins().then(data => {
      const topCoins = data.splice(0, 10).map(coin => ({
        id: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: 0
      }));
      setCoins(topCoins);
      updateCoinPrices(topCoins);
    })
    .catch(err => console.log('Get all coins error:', err));
  }

  useEffect(() => {
    if (coins.length === 0) {
      componentDidMount();
    }
  });

  return (
    <div className="App">
      <Header />
      <AccountBalance
        amount={balance}
        showBalance={showBalance}
        handleShowBalance={toggleShowBalance}
      />
      <Coins
        coins={coins}
        showBalance={showBalance}
        refreshPrice={refreshPrice}
      />
    </div>
  );
}

export default App;
