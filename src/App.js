import React, { useState, useEffect } from 'react';
import Coins from './components/Coins/Coins';
import Header from './components/Header/Header';
import './App.css';

const api = 'https://api.coinpaprika.com/v1';

function App() {
  const [balance, setBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false);
  const [initialCoins, setInitialCoins] = useState([]);
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

  const filterCoins = (event) => {
    const keyword = event.target.value.trim().toLowerCase();
    const filteredCoins = initialCoins.filter(coin => {
      const coinText = `${coin.name.toLowerCase()} ${coin.ticker.toLowerCase()}`;
      return coinText.includes(keyword);
    });
    setCoins(filteredCoins);
  }

  const updateCoinPrices = async (coins) => {
    const topCoins = coins.slice(0, 10);
    const restCoins = coins.slice(10);
    const prices = await Promise.all(topCoins.map(coin => getCoinById(coin.id)));
    const updatedCoins = topCoins.map((coin, index) => ({
      ...coin,
      price: Number(prices[index].price_usd)
    }));
    setCoins([...updatedCoins, ...restCoins]);
    setInitialCoins([...updatedCoins, ...restCoins]);
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
      const topCoins = data.slice(0, 100).map(coin => ({
        id: coin.id,
        name: coin.name,
        ticker: coin.symbol,
        balance: Math.round(Math.random() * 10000) / 100,
        price: 0
      }));
      const balances = topCoins.map(coin => coin.balance);
      setBalance(balances.reduce((a, b) => a + b, 0));
      setInitialCoins(topCoins);
      setCoins(topCoins);
      updateCoinPrices(topCoins);
    })
    .catch(err => console.log('Get all coins error:', err));
  }

  useEffect(() => {
    if (initialCoins.length === 0) {
      componentDidMount();
    }
  });

  return (
    <div className="App">
      <Header
        showBalance={showBalance}
        handleShowBalance={toggleShowBalance}
      />
      <Coins
        coins={coins}
        balance={balance}
        showBalance={showBalance}
        refreshPrice={refreshPrice}
        filterCoins={filterCoins}
      />
      {/* <div>Icons made by <a href="https://www.flaticon.com/authors/vectors-market" title="Vectors Market">Vectors Market</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div> */}
    </div>
  );
}

export default App;
