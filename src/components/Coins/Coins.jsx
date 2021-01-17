import React from 'react'
import Coin from '../Coin/Coin';
import './Coins.css';

export default function Coins(props) {
  const formatter = Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD'
  });
  const formatedBalance = props.showBalance ? <span>{ formatter.format(props.balance) }</span> : null;
  return (
    <>
      <div className="d-flex justify-content-between align-items-center search-container">
        <input type="text" className="search-input" placeholder="Search" onChange={props.filterCoins} />
        { formatedBalance }
      </div>
      <div className="coins-container">
      <table>
        <tbody>
          { props.coins.map(({id, name, ticker, balance, price}) =>
            <Coin
              id={id}
              name={name}
              ticker={ticker}
              balance={balance}
              price={price}
              key={id}
              showBalance={props.showBalance}
              refreshPrice={props.refreshPrice}
            />)
          }
        </tbody>
      </table>
      </div>
    </>
  )
}
