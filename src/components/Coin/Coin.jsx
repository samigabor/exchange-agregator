import React, { Component } from 'react'
import PropTypes from 'prop-types';


export default class Coin extends Component {
  constructor(props) {
    super(props);
  
    this.state = {
      price: this.props.price
    }
  }

  refreshPrice = () => {
    const randomPercentage = 0.995 + Math.random() * 0.01;
    this.setState((state) => ({ price: Math.round(state.price * randomPercentage * 1000) / 1000 }));
  }

  render() {
    return (
      <tr>
        <td>{ this.props.name }</td>
        <td>{ this.props.ticker }</td>
        <td>${ this.state.price }</td>
        <td>
        <button onClick={this.refreshPrice}>Refresh</button>
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
