import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Section = styled.section`
  color: bisque;
  text-align: start;
  margin: 1.5rem 2rem;
`;

export default class AccountBalance extends Component {
  render() {
    return (
      <Section>
        Balance: ${this.props.amount}
      </Section>
    )
  }
}

AccountBalance.propTypes = {
  amount: PropTypes.number.isRequired
}
