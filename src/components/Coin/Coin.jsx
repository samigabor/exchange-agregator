import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class Coin extends Component {
  render() {
    return (
      <tr>
        <td>{ this.props.name }</td>
        <td>{ this.props.ticker }</td>
        <td>${ this.props.price }</td>
        <td>
        <button onClick={() => this.props.refreshPrice(this.props.ticker)}>Refresh</button>
        </td>
      </tr>
    )
  }
}

Coin.propTypes = {
  name: PropTypes.string,
  ticker: PropTypes.string,
  price: PropTypes.number,
}
