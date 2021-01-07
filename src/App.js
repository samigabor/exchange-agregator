import logo from './logo.svg';
import './App.css';
import Coin from './components/Coin/Coin';
import AccountBalance from './components/AccountBalance/AccountBalance';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Coin Exchange</h1>
      </header>
      <AccountBalance amount={10000}/>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <Coin name="Bitcoin" ticker="BTC" price={35000}/>
          <Coin name="Ether" ticker="ETH" price={1100}/>
          <Coin name="Tether" ticker="USDT" price={1}/>
        </tbody>
      </table>
    </div>
  );
}

export default App;
