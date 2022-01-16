import logo from './images/logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import React, { Component } from "react";

class YsNavLogo extends React.Component {
  render () {
    return <div>
      <Navbar.Brand  href="#home">
        <img
          alt=""
          src={logo}
          width="60"
          height="60"
          className="d-inline-block"
        />{' '}
        <div id="city-brand"><strong>YS</strong> City of Waters</div>
      </Navbar.Brand>
    </div>
  }
}

export default YsNavLogo;
