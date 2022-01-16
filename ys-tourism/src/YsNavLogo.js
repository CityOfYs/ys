import logo from './images/logo.svg';
import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from "react";

class YsNavLogo extends Component {
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
