import React from 'react'
import Coin from '../Coin/Coin';
import './Coins.css';

export default function Coins(props) {
  return (
    <table>
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
    </table>
  )
}
