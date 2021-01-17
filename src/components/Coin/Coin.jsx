import React from 'react'
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import './Coin.css';

export default function Coin(props) {
  const formatter = Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD'
  });
  const formatedPrice = formatter.format(props.price);

  return (
    <tr>
      <td className="d-flex align-items-center">
        <div className="d-flex justify-content-center align-items-center coin-icon-container">
          <i className={`crypto crypto-${props.ticker.toLowerCase()}`}></i>
        </div>
        <div className="text-left">
          <p className="coin-ticker">{ props.ticker }</p>
          <p className="coin-name">{ props.name }</p>
        </div>
      </td>

      { props.showBalance ? <td>{ props.balance }</td> : null }

      <td>{ formatedPrice }</td>

      <td>
        <Button variant="info"  size="sm" onClick={() => props.refreshPrice(props.id)}>
          Refresh
        </Button>
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
