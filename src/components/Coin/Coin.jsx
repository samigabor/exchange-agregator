import React from 'react'
import PropTypes from 'prop-types';
import refreshIcon from '../../images/refresh.png';
import './Coin.css';

export default function Coin(props) {
  const formatter = Intl.NumberFormat('es-US', {
    style: 'currency',
    currency: 'USD'
  });
  const formatedPrice = formatter.format(props.price);

  return (
    <tr>
      <td>
        <div className="d-flex">
          <div className="d-flex justify-content-center coin-icon-container">
            <i className={`crypto crypto-${props.ticker.toLowerCase()} coin-icon`}></i>
          </div>
          <div>
            <p className="coin-ticker">{ props.ticker }</p>
            <p className="coin-name">{ props.name }</p>
          </div>
        </div>
      </td>

      <td>
        <p className="text-right m-0">
          { props.showBalance ? props.balance : null }
        </p>
          
      </td>

      <td>
        <p className="text-right m-0">
          { formatedPrice }
        </p>
      </td>

      <td>
        <div className="text-right pl-2 pr-2">
          <img role="button" src={refreshIcon} alt="Refresh" onClick={() => props.refreshPrice(props.id)}/>
        </div>
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
