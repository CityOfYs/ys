import './../App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import YsNavLogo from "./../YsNavLogo";
import Footer from "./../Footer";
import React, { useState, useEffect } from 'react';
import PDFViewer from './PDFViewer';
import ReactGA from "react-ga4";
import { useLocation } from 'react-router-dom';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';


export default function CityGovt() {
    const [activeLink, setActiveLink] = useState("citizenhome");
    const handleSelect = (eventKey) => setActiveLink(eventKey);
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
                  <Nav.Link href="#places" className="link-light">Licenses & Permits</Nav.Link>
                  <Nav.Link href="#things" className="link-light">Programs & Initiatives</Nav.Link>
                  <Nav.Link href="https://cityofys.herokuapp.com/tourism" className="white-font">Tourism</Nav.Link>
                </Nav>
              </Container>
            </Container>
          </Navbar>
          <Container fluid>
            <Row>
                Welcome to Ys
            </Row>
            <Row>
                <Col>
                </Col>
                <Col>
                    <ReactEmbeddedGoogleCalendar
                    publicUrl ="https://calendar.google.com/calendar/embed?src=v6rj4d9j4js9qad0n36uec1s5k%40group.calendar.google.com"
                    height= '400px'/>
                </Col>
                <Col>
                </Col>
            </Row>
          </Container>
          <Footer orgname="Ys City Government"
            email="mailto:cityofys.gov+immigration-support"
            needsAbs={activeLink === "citizenhome" ? true : false} />
          </div>
      );
  }
