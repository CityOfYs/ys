import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Row className="primary-background padding-20 white-font">
          <Col>
          </Col>
          <Col>
            <ul >
              <li>About</li>
              <li>Careers</li>
            </ul>
          </Col>
          <Col>
          </Col>
          <Col>
          </Col>
          <Col>
          <ListGroup variant="flush">
          Connect With Us:
          <ListGroup.Item>
            <a href="https://twitter.com/CityOfYs?ref_src=twsrc%5Etfw" class="twitter-follow-button" data-show-count="false">Follow @CityOfYs</a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
          </ListGroup.Item>
          </ListGroup>
          </Col>
          <Col>
          </Col>
        </Row>
      </div>
    );
 }
}

export default Footer;
