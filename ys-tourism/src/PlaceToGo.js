import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import farmhouse from './images/farmhouse.jpg';
import bluffs from './images/alexsea.png';
import theaterdistrict from './images/theater-district.png';
import cliffhouse from './images/cliffhouse.jpg';
import ocean from './images/oceanrock.jpg';
import cityhall from './images/city-hall.png';
import eyehouse from './images/house-of-eyes.png';
import garden from './images/flowers.png';
import wall from './images/wall.png';

class PlaceToGo extends React.Component {
  render() {
    return (
      <div>
        <Row id="places" className="padding-5">
          <div className="padding-40"></div>
          <div className="padding-15"></div>
          <h1>Places To Go</h1>
        </Row>
        <Row>
          <Col>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={bluffs} />
              <Card.Title>Gralon Bluffs</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={cliffhouse} />
              <Card.Title>Corentin-By-The-Sea</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={theaterdistrict} />
              <Card.Title>The Kêr-Is District</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={ocean} />
              <Card.Title>The Cool, Dark Waters</Card.Title>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
        <Row>
          <Col>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={wall} />
              <Card.Title>The Wall</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={cityhall} />
              <Card.Title>Ys City Hall</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={garden} />
              <Card.Title>Jardin Mari-Morgen</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={eyehouse} />
              <Card.Title>The House of Eyes</Card.Title>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
      </div>
      );
   }
  }

  export default PlaceToGo;
