import React from 'react'
import PropTypes from 'prop-types';
import formatPrice from '../../helpers/format-price';

export default function Coin(props) {
  return (
    <tr>
      <td>{ props.name }</td>
      <td>{ props.ticker }</td>
      { props.showBalance ? <td>{ props.balance }</td> : null }
      <td>{ formatPrice(props.price) }</td>
      <td>
      <button onClick={() => props.refreshPrice(props.id)}>
        Refresh
      </button>
      </td>
    </tr>
  )
}

Coin.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  ticker: PropTypes.string,
  balance: PropTypes.number,
  price: PropTypes.number
}
