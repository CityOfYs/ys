import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Card from 'react-bootstrap/Card'
import stream from './images/stream.jpg';
import housetree from './images/house-tree.jpg';
import sunsetshore from './images/sunset-shore.png';
import cityfacade from './images/city-facade.png';

class ThingsToDo extends React.Component {
  render() {
    return (
      <div>
        <Row id="things" className="padding-5">
          <div className="padding-40"></div>
          <div className="padding-15"></div>
          <h1>Things To Do</h1>
        </Row>
        <Row>
          <Col>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={stream} />
              <Card.Title>Outdoor Adventure</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={sunsetshore} />
              <Card.Title>Coastal Adventure</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={cityfacade} />
              <Card.Title>Culinary Activities</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={housetree} />
              <Card.Title>Experiences</Card.Title>
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
              <Card.Img variant="top" src={stream} />
              <Card.Title>Culture & Heritage</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={sunsetshore} />
              <Card.Title>Music & The Arts</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={cityfacade} />
              <Card.Title>Festivals & Events</Card.Title>
            </Card>
          </Col>
          <Col>
            <Card style={{ width: '15rem' }}>
              <Card.Img variant="top" src={housetree} />
              <Card.Title>Marvel</Card.Title>
            </Card>
          </Col>
          <Col>
          </Col>
        </Row>
      </div>
      );
   }
  }

  export default ThingsToDo;
