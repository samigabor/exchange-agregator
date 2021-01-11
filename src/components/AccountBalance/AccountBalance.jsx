import React, { Component } from 'react'
import PropTypes from 'prop-types';
import './AccountBalance.css';

export default class AccountBalance extends Component {
  render() {
    return (
      <section className="account-balance">
        <button onClick={this.props.handleShowBalance}>{this.props.showBalance ? 'Hide ' : 'Show'} Balance</button>
        <span className="balance-amount">{ this.props.showBalance ? `$${this.props.amount}` : '' }</span>
      </section>
    )
  }
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired
}
