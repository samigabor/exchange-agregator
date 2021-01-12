import React, { Component } from 'react'
import PropTypes from 'prop-types';
import formatPrice from '../../helpers/format-price';

export default class Coin extends Component {
  render() {
    return (
      <tr>
        <td>{ this.props.name }</td>
        <td>{ this.props.ticker }</td>
        { this.props.showBalance ? <td>{ this.props.balance }</td> : null }
        <td>{ formatPrice(this.props.price) }</td>
        <td>
        <button onClick={() => this.props.refreshPrice(this.props.id)}>
          Refresh
        </button>
        </td>
      </tr>
    )
  }
}

Coin.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  ticker: PropTypes.string,
  balance: PropTypes.number,
  price: PropTypes.number
}
