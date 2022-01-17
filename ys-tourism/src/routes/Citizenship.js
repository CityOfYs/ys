import './../App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Alert from 'react-bootstrap/Alert'
import YsNavLogo from "./../YsNavLogo";
import Footer from "./../Footer";
import React, { useState } from 'react';
import PDFViewer from './PDFViewer';


export default function Citizenship() {
  const [activeLink, setActiveLink] = useState("citizenhome");
  const handleSelect = (eventKey) => setActiveLink(eventKey);

  return (
    <main className="page-container">
      <Alert className="text-centered padding-0 margin-bottom-none" variant="danger">
         <Alert.Link href="">YCIS Response to Coronavirus (COVID-19) </Alert.Link>
      </Alert>
      <Navbar bg="primary" expand="lg" variant="dark" sticky="top" >
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
              Citizenship Eligibility Worksheet
              <PDFViewer />
          </Col>
          <Col xs={6} style={{ display: activeLink === "citizenhome" ? "inline-block" : "none" }}>
            So you wish to become a citizen! Commendable, and foolhardy.
          </Col>
          <Col>
          </Col>
        </Row>
        <Row className="margin-5">
        </Row>
        <Footer orgname="Ys City Government"
          email="mailto:cityofys.gov+immigration-support"
          needsAbs={activeLink === "citizenhome" ? true : false} />
      </Container>
    </main>
  );
}
