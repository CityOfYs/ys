import './../App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import YsNavLogo from "./../YsNavLogo";
import Footer from "./../Footer";
import React, { useState } from 'react';
import PDFViewer from './PDFViewer';


export default function Citizenship() {
  const [activeLink, setActiveLink] = useState("citizenhome");
  const handleSelect = (eventKey) => setActiveLink(eventKey);

  return (
    <main className="App">
    <main className="App page-container">
      <Navbar bg="primary" expand="lg" variant="dark" fixed="top">
        <Container>
          <YsNavLogo />
          <Container>
            <Nav className="me-auto" fill justify defaultActiveKey="/#home">
              <Nav.Link href="#placeh" className="white-font">Placeholder</Nav.Link>
            </Nav>
          </Container>
        </Container>
      </Navbar>
      <Container fluid>
        <Row>
          ...hi?
        </Row>
        <Row>
          <h2>Naturalization Resource Center</h2>
        </Row>
        <Row>
          <h2>Naturalization Resource Center</h2>
        </Row>

        <Row>
          <Col>
            <Nav defaultActiveKey="/home" className="flex-column" activeKey="/home" onSelect={handleSelect}>
            <Nav.Link eventKey="citizenhome">Home</Nav.Link>
            <Nav.Link eventKey="eligibility">Citizenship Eligibility Tool</Nav.Link>
            <Nav.Link eventKey="disabled" disabled>
              Naturalization Application Portal (coming soon)
            </Nav.Link>
            </Nav>
          </Col>
          <Col style={{ display: activeLink === "eligibility" ? "block" : "none" }}>
              Citizenship Eligibility Worksheet
              <PDFViewer />
          </Col>
          <Col style={{ display: activeLink === "citizenhome" ? "block" : "none" }}>
            So you with to become a citizen! Commendable, and foolhardy.
          </Col>
          <Col>
          </Col>
        </Row>
        <Footer orgname="Ys City Government"
          email="mailto:cityofys.gov+immigration-support"
          needsAbs={activeLink === "citizenhome" ? true : false} />
      </Container>
    </main>
  );
}
