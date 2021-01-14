import React from 'react'
import Coin from '../Coin/Coin';

export default function Coins(props) {
  return (
    <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Ticker</th>
            { props.showBalance ? <th>Balance</th> : null }
            <th>Price</th>
          </tr>
        </thead>
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
  )
}
