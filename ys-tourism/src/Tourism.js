import './App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Jumbotron from 'react-bootstrap/Jumbotron';
import React, { useEffect } from "react";
import Alert from 'react-bootstrap/Alert'
import Weather from "./Weather";
import PlaceToGo from "./PlaceToGo";
import ThingsToDo from "./ThingsToDo";
import Footer from "./Footer";
import YsNavLogo from "./YsNavLogo";
import { useLocation } from 'react-router-dom';
import ReactGA from "react-ga4";


export default function Tourism() {
  let location = useLocation();
  useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
  });
  return (
      <div className="text-centered page-container" id="home">
        <Alert className="padding-0 margin-bottom-none" variant="danger" >
          COVID-19: Update for Travellers <Alert.Link href="https://www.who.int/news-room/questions-and-answers/item/coronavirus-disease-covid-19-travel-advice-for-the-general-public">
          Learn more
          </Alert.Link>
        </Alert>
          <Navbar bg="primary-blue" expand="lg" variant="dark" sticky="top">
            <Container>
              <YsNavLogo tagline="City of Waters"/>
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

          <Footer orgname="Ys Visitors Bureau" email="mailto:cityofys.gov+toursim@gmail.com"/>
        </Container>
      </div>
    );

}
