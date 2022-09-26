import './App.css';
import Navbar from 'react-bootstrap/Navbar'
import React, { Component } from "react";
import SvgComponent from './Icon.js';

class YsNavLogo extends Component {
  render () {
    return <div>
      <Navbar.Brand href="#home">
        <SvgComponent/>
        <div id="city-brand"><strong>YS</strong> {this.props.tagline} </div>
      </Navbar.Brand>
    </div>
  }
}

export default YsNavLogo;
