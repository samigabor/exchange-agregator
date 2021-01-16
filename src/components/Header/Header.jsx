import React from 'react'
import FormCheck from 'react-bootstrap/FormCheck';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Header.css';

export default function Header(props) {
  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand href="#home">Agregator</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          {/* <Nav.Link href="#convertor">Convertor</Nav.Link> */}
          {/* <Nav.Link href="#portfolio">Portfolio</Nav.Link>
          <Nav.Link href="#history">History</Nav.Link> */}
        </Nav>
        <Nav>
          <FormCheck 
            id="switchBalance"
            type="switch"
            checked={props.showBalance}
            onChange={props.handleShowBalance}
            label="Balance"
          />
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
