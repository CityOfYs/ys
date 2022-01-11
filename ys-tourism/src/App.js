import logo from './images/logo.svg';
import './App.css';
import Image from 'react-bootstrap/Image'
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
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
          <Navbar bg="dark" variant="dark" fixed="top">
            <Navbar.Brand className="padding-left-1p">
              <Image src={logo} className="ys-logo App-logo" alt="logo" rounded xs={1}  />
            </Navbar.Brand >
            <Navbar.Brand className="text-left white-font" variant="dark">
              <h1>YS</h1> City of Waters
            </Navbar.Brand>
            <Nav.Link href="#home" variant="dark">Home</Nav.Link>
            <Nav.Link href="#tourism">Planning Your Visit</Nav.Link>
            <Nav.Link href="#places">Places To Go</Nav.Link>
            <Nav.Link href="#things">Things To Do</Nav.Link>
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
