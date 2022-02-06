import React from "react";
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

class Footer extends React.Component {
  render() {
    return (
      <div id="footer" style={{ position: this.props.citizenship ? "absolute" : "relative" }}>
        <Row className={`padding-20 white-font ${this.props.citizenship ? "primary-green-background" : "primary-blue-background"}`}>
          <Col className="d-none d-lg-block">
          </Col>
          <Col className="d-none d-lg-block">
            <div>© 2022 {this.props.orgname}. All Rights Reserved.</div>
          </Col>
          <Col className="d-none d-lg-block">
          </Col>
          <Col>
            Our Websites:
            <ul>
              <li><a href="https://cityofys.herokuapp.com/" className="white-font">Tourism</a></li>
              <li><a href="https://cityofys.herokuapp.com/citizenship-resource-center" className="white-font">Immigration</a></li>
            </ul>
          </Col>
          <Col className="d-none d-lg-block">
          </Col>
          <Col>
          Contact Information:
          <br /><a href={this.props.email}  className="white-font">Contact us by email</a>
          </Col>
          <Col className="d-none d-lg-block">
          </Col>
          <Col>
            Connect With Us:
            <br />
            <a href="https://twitter.com/CityOfYs?ref_src=twsrc%5Etfw" className="twitter-follow-button" data-show-count="false">Follow @CityOfYs</a><script async src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </Col>
          <Col className="d-none d-lg-block">
          </Col>
        </Row>
        <Row className="d-lg-none d-sm-block d-xs-block">
          <div>© 2022 {this.props.orgname}. All Rights Reserved.</div>
        </Row>
      </div>
    );
 }
}

export default Footer;
