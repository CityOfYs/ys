import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Footer extends React.Component {
  render() {
    return (
      <div>
        <Row className="primary-background padding-20 white-font">
          <Col>
          </Col>
          <Col>
            <p>© 2022 Ys Visitors Bureau. All Rights Reserved.</p>
          </Col>
          <Col>
          </Col>
          <Col>
          Contact Information:
          <br /><a href="mailto:cityofys.gov+toursim@gmail.com">Contact us by email</a>
          </Col>
          <Col>
          </Col>
          <Col>
            Connect With Us:
            <a href="https://twitter.com/CityOfYs?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @CityOfYs</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </Col>
          <Col>
          </Col>
        </Row>
      </div>
    );
 }
}

export default Footer;
