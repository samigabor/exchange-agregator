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
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {
              this.props.coins.map(({name, ticker, price}) => <Coin name={name} ticker={ticker} price={price} key={ticker} refreshPrice={this.props.refreshPrice}/>)
            }
          </tbody>
          
        </table>
    )
  }
}
