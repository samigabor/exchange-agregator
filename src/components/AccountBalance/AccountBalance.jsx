import React from 'react'
import PropTypes from 'prop-types';
import './AccountBalance.css';

export default function AccountBalance(props) {
  return (
    <section className="account-balance">
      <button onClick={props.handleShowBalance}>
        { props.showBalance ? 'Hide ' : 'Show' } Balance
      </button>
      <span className="balance-amount">
        { props.showBalance ? `$${props.amount}` : '' }
      </span>
    </section>
  )
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired
}
