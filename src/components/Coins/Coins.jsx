import React, { Component } from 'react'
import Coin from '../Coin/Coin';

export default class Coins extends Component {
  render() {
    return (
      <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Ticker</th>
              { this.props.showBalance ? <th>Balance</th> : null }
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            { this.props.coins.map(({id, name, ticker, balance, price}) =>
              <Coin
                id={id}
                name={name}
                ticker={ticker}
                balance={balance}
                price={price}
                key={id}
                showBalance={this.props.showBalance}
                refreshPrice={this.props.refreshPrice}
              />)
            }
          </tbody>
        </table>
    )
  }
}
