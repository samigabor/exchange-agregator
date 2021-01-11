import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class Coin extends Component {
  render() {
    return (
      <tr>
        <td>{ this.props.name }</td>
        <td>{ this.props.ticker }</td>
        { this.props.showBalance ? <td>{ this.props.balance }</td> : null }
        <td>${ this.props.price }</td>
        <td>
        <button onClick={() => this.props.refreshPrice(this.props.ticker)}>
          Refresh
        </button>
        </td>
      </tr>
    )
  }
}

Coin.propTypes = {
  name: PropTypes.string,
  ticker: PropTypes.string,
  balance: PropTypes.number,
  price: PropTypes.number,
}
