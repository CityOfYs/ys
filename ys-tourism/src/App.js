import logo from './images/logo.svg';
import sunsetshore from './images/sunset-shore.png';
import cloudlump from './images/cloudlump.png';
import stream from './images/stream.jpg';
import cliffhouse from './images/cliffhouse.jpg';
import './App.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { Component } from "react";
import Weather from "./Weather";

class App extends Component {

  render() {
    return (
      <div className="App">
          <Navbar bg="dark"  fixed="top">
            <Navbar.Brand>
              <Image src={logo} className="ys-logo App-logo" alt="logo" rounded xs={1}  />
            </Navbar.Brand >
            <Navbar.Brand className="text-left">
              <h1>YS</h1> City of Waters
            </Navbar.Brand>
            <Nav.Link href="#tourism">Planning Your Visit</Nav.Link>
            <Nav.Link href="#tourism">Places To Go</Nav.Link>
            <Nav.Link href="#tourism">Things To Do</Nav.Link>
          </Navbar>

          <Container fluid>
          <Row>
          <Jumbotron fluid className="jumbotron-image black-font">
            <h1>A place your heart can never forget</h1>
          </Jumbotron>
          </Row>

          <Weather />
          <Row>
          <a href="https://twitter.com/CityOfYs?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @CityOfYs</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
