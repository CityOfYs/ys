import logo from './images/Logo.png';
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

class App extends Component {

  render() {
    return (
      <div className="App">
          <Navbar bg="dark" >
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
            <h1>Regular, Jumbotron!</h1>
            <p>
              This is a simple Jumbotron example.
            </p>

            <p>
            </p>
          </Jumbotron>
          </Row>
          <Row id="tourism" className="border-bottom padding-5">
            <div className="padding-20"></div>
            <h1>Planning your vacation to Ys</h1>
          </Row>
          <Row>
            <Col>
            </Col>
            <Col className="padding-5">
              <Carousel fade variant="dark" controls={false} intervale={1000}>
                <Carousel.Item>
                  <Image src={sunsetshore} className="d-block w-10" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={cloudlump} className="d-block w-10" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={stream} className="d-block w-10" />
                </Carousel.Item>
                <Carousel.Item>
                  <Image src={cliffhouse} className="d-block w-10" />
                </Carousel.Item>
              </Carousel>
            </Col>
            <Col>
            </Col>
          </Row>

          <Row>
            <Col className="padding-0">
            </Col>
            <Col  className="padding-5 col-6">
              <Row>
                <Col className="border-bottom green-bg">
                  Ys is a coastal city, nestled in the foothills of the —— mountains.
                  At —— feet before sea level, it is the lowest capital in the world.
                  Our climate is temperate, though the same day may offer you sun, rain,
                  wind, and fog, so remember to pack a variety of layers.
                </Col>
              </Row>

              <Row>
                <Col className="green-bg">
                  Spring
                  <div>
                  0-10 C, 33-50 F
                  </div>
                </Col>
                <Col className="green-bg">
                  Summer
                  <div>
                  20-25 C, 70-80F
                  </div>
                </Col>
                <Col className="green-bg">
                  Fall
                  <div>
                  10-20 C, 50-70F
                  </div>
                </Col>
                <Col className="green-bg">
                  Winter
                  <div>
                    We do not speak of winter.
                  </div>
                </Col>
              </Row>
            </Col>
            <Col  className="padding-0">
            </Col>
          </Row>
          <Row>
          <a href="https://twitter.com/CityOfYs?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @CityOfYs</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </Row>
        </Container>
      </div>
    );
  }
}

export default App;
