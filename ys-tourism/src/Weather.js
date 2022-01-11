import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Carousel from 'react-bootstrap/Carousel'
import Image from 'react-bootstrap/Image'
import cloudlump from './images/cloudlump.png';
import farmhouse from './images/farmhouse.jpg';

class Weather extends React.Component {
  render() {
    return (
      <div>
      <Row id="tourism" className="padding-5">
        <div className="padding-40"></div>
        <h1>Planning Your Visit</h1>
      </Row>
      <Row>
        <Col>
        </Col>
        <Col className="padding-5">
          <Carousel fade variant="dark" controls={false} intervale={700}>
            <Carousel.Item>
              <Image src={cloudlump} className="d-block w-10" />
            </Carousel.Item>
            <Carousel.Item>
              <Image src={farmhouse} className="d-block w-10" />
            </Carousel.Item>
          </Carousel>
        </Col>
        <Col>
        </Col>
      </Row>
      <Row>
        <Col className="padding-0">
        </Col>
        <Col  className="padding-5 col-7">
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
      </div>
    );
 }
}

export default Weather;
