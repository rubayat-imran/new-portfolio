import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import SocialMedia from "../components/SocialMedia";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col xl="4" md="3" className="footer-copywright">
          <h3>Developed by Rubayat Imran</h3>
        </Col>
        <Col xl="4" md="3" className="footer-copywright">
          <h3>Copyright © {year} </h3>
        </Col>
        <Col xl="4" md="6" className="footer-body">
          <SocialMedia />
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
