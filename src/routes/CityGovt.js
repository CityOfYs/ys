import './../App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import YsNavLogo from "./../YsNavLogo";
import Footer from "./../Footer";
import React, { useState, useEffect } from 'react';
import Image from 'react-bootstrap/Image'
import ReactGA from "react-ga4";
import { useLocation } from 'react-router-dom';
import { ReactEmbeddedGoogleCalendar } from 'react-embedded-google-calendar';
import theater from './../images/theater.png';
import Clock from './Clock';


export default function CityGovt() {
    const [activeLink, setActiveLink] = useState("home");
    const handleSelect = (eventKey) => setActiveLink(eventKey);
    let location = useLocation();

    useEffect(() => {
      ReactGA.send({ hitType: "pageview", page: location.pathname });
    });

  return (
      <div className="page-container">
          <Navbar bg="primary-blue" expand="lg" variant="dark" sticky="top">
            <Container>
              <YsNavLogo tagline="City of Waters"/>
              <Container>
                <Nav className="me-auto" fill justify defaultActiveKey="home" activeKey="home" onSelect={handleSelect}>
                  <Nav.Link eventKey="home" className="link-light">Home</Nav.Link>
                  <Nav.Link eventKey="licenses" className="link-light">Licenses & Permits</Nav.Link>
                  <Nav.Link eventKey="programs" className="link-light">Programs & Initiatives</Nav.Link>
                  <Nav.Link href="https://cityofys.herokuapp.com/tourism" className="white-font">Tourism</Nav.Link>
                </Nav>
              </Container>
            </Container>
          </Navbar>
          <Container fluid>
            <Row style={{ display: activeLink === "home" ? "" : "none" }}>
              <Row>
                <Col md={{ span: 6, offset: 3 }} className="text-centered">
                    <h1 className="margin-top-1p">Welcome to Ys!</h1>
                </Col>
              </Row>
              <Row className="margin-top-3p">
                <Col md={{ span: 6, offset: 4 }}>
                    <Image roundedCircle={true} src={theater} className="max-height-30em margin-10 max-width-100p" />
                </Col>
              </Row>
            </Row>
            <Row style={{ display: activeLink === "licenses" ? "" : "none" }}>
                <Row className="padding-5">
                    <Col md={{ span: 7, offset: 3 }}  className="text-centered" >
                        <Clock/>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ span: 7, offset: 3 }}>
                        As of October 15th, 2019, all citizens of Ys require a license to own and operate a clock or timepiece.
                        Please contact the <a href="mailto:cityofys.gov+permitsandlicenses@gmail.com">appropriate department</a> to inquire about licensing and registration.
                        <br /> <br />
                        Vistors on a travel visa may request a city timepiece for the duration of their stay, if they can demonstrate a need.
                    </Col>
                </Row>
            </Row>
            <Row style={{ display: activeLink === "programs" ? "block" : "none" }}>
                <Col md={{ span: 6, offset: 3 }} className="margin-top-1p">
                    <ReactEmbeddedGoogleCalendar
                    publicUrl ="https://calendar.google.com/calendar/embed?src=v6rj4d9j4js9qad0n36uec1s5k%40group.calendar.google.com"
                    height= '400px'/>
                </Col>
            </Row>
          </Container>
          <Footer orgname="Ys City Government"
            email="mailto:cityofys.gov+immigration-support"
            needsAbs={true} />
          </div>
      );
  }
