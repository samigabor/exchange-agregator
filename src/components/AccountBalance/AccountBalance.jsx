import React, { Component } from 'react'
import './AccountBalance.css';

export default class AccountBalance extends Component {
  render() {
    return (
      <p>
        Balance: ${this.props.amount}
      </p>
    )
  }
}
