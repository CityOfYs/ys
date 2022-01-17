import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer" style={{ position: this.props.needsAbs ? "absolute" : "relative" }}>
        <Row className="primary-background padding-20 white-font">
          <Col>
          </Col>
          <Col>
            <p>© 2022 {this.props.orgname}. All Rights Reserved.</p>
          </Col>
          <Col>
          </Col>
          <Col>
            Our Websites:
            <ul>
              <li><a href="https://cityofys.herokuapp.com/" className="white-font">Tourism</a></li>
              <li><a href="https://cityofys.herokuapp.com/citizenship-resource-center" className="white-font">Immigration</a></li>
            </ul>
          </Col>
          <Col>
          </Col>
          <Col>
          Contact Information:
          <br /><a href={this.props.email}  className="white-font">Contact us by email</a>
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
