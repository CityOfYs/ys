import './../App.css';
import Container from 'react-bootstrap/Container'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import YsNavLogo from "./../YsNavLogo";
import Footer from "./../Footer";
import React, { useState }  from 'react';
import PDFViewer from './PDFViewer';


export default function Citizenship() {
  return (
    <main className="App">
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
            Citizenship Resource Center
          </Col>
          <Col>
            Citizenship Eligibility Worksheet
            <PDFViewer />
          </Col>
          <Col>
          </Col>
        </Row>
        <Footer orgname="Ys City Government" email="mailto:cityofys.gov+immigration-support" />
      </Container>
    </main>
  );
}
