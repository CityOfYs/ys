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


export default function Citizenship() {
  const [activeLink, setActiveLink] = useState("citizenhome");
  const handleSelect = (eventKey) => setActiveLink(eventKey);
  let location = useLocation();

   useEffect(() => {
       ReactGA.send({ hitType: "pageview", page: location.pathname });
   });

  return (
    <main className="page-container">
      <Alert className="text-centered padding-0 margin-bottom-none" variant="danger">
         <Alert.Link href="">YCIS Response to Coronavirus (COVID-19) </Alert.Link>
      </Alert>
      <Navbar bg="primary-green" expand="lg" variant="dark" sticky="top" >
        <Container>
          <YsNavLogo tagline="Citizenship And Immigration Services" />
        </Container>
      </Navbar>
      <Container fluid>
        <div className="padding-20"></div>
        <Row>
          <Col>
          </Col>
          <Col xs={6}>
            <h2 className="text-centered">Citizenship Resource Hub</h2>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
            <Nav defaultActiveKey="citizenhome" className="flex-column" activeKey="citizenhome" onSelect={handleSelect}>
            <Nav.Link eventKey="citizenhome">Home</Nav.Link>
            <Nav.Link eventKey="eligibility">Citizenship Eligibility Tool</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Naturalization Application Portal (coming soon)
            </Nav.Link>
            </Nav>
          </Col>
          <Col xs={6} style={{ display: activeLink === "eligibility" ? "inline-block" : "none" }}>
              <h6 className="margin-top-1p">
                Before you begin the application for naturalization (Form L-900), answer a few questions to see if you are eligible
                to apply to become a Ysian citizan through naturalization.
              </h6>
              <div>
                These questions are solely intended to help you determine if you are eligible to submit Form L-900. These questions do not
                actually determine if you are eligible for citizenship. After you submit your application, YCIS will review your information
                and determine if you are eligible for citizenship through naturalization. This is your door, and we are your doorkeeper.
              </div>
              <div className="padding-15"></div>
              <h4>Citizenship Eligibility Worksheet </h4>
              <PDFViewer />
          </Col>
          <Col xs={6} style={{ display: activeLink === "citizenhome" ? "inline-block" : "none" }}>
            <div className="padding-15"></div>
            <div>
                So you wish to become a citizen! Commendable, and foolhardy. Our walls are not yet ready to receive you, but they will be.
                In the meantime, reflect, observe, and wait.
            </div>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row className="margin-5">
        </Row>
        <Footer orgname="Ys City Government"
          email="mailto:cityofys.gov+immigration-support"
          citizenship={activeLink === "citizenhome" ? true : false} />
      </Container>
    </main>
  );
}
