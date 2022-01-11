import logo from './images/logo.svg';
import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { Component } from "react";
import Weather from "./Weather";
import PlaceToGo from "./PlaceToGo";
import ThingsToDo from "./ThingsToDo";
import Footer from "./Footer";

class App extends Component {

  render() {
    return (
      <div className="App" id="home">
          <Navbar bg="primary" expand="lg" variant="dark" fixed="top">
            <Container>
            <Navbar.Brand  href="#home">
              <img
                alt=""
                src={logo}
                width="60"
                height="60"
                className="d-inline-block"
              />{' '}
              <div id="city-brand"><strong>YS</strong> City of Waters</div>
            </Navbar.Brand >
            <Container>
            <Nav className="me-auto" fill justify defaultActiveKey="/#home">
              <Nav.Link href="#tourism" className="white-font">Planning Your Visit</Nav.Link>
              <Nav.Link href="#places" className="link-light">Places To Go</Nav.Link>
              <Nav.Link href="#things" className="link-light">Things To Do</Nav.Link>
            </Nav>
            </Container>
            </Container>
          </Navbar>

          <Container fluid>
          <Row>
          <Jumbotron fluid className="jumbotron-image">
            <h1 className="hero-font">A place your mind can never forget</h1>
          </Jumbotron>
          </Row>

          <Weather />
          <PlaceToGo />
          <ThingsToDo />

          <Footer />
        </Container>
      </div>
    );
  }
}

export default App;
