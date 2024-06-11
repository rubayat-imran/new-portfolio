import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Aboutcard from "./AboutCard";
import AboutSkills from "./AboutSkills";
import developer from "../../Assets/developer.jpg";


function About() {
  return (
    <Container fluid className="about-section">
      <Container>
        <Row className="about-section-wrapper">
          <Col className="about-section-description" md={7}>

            <h1 className="about-header">
              <strong className="purple">About Me</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={5} style={{ paddingBottom: "50px" }} className="about-img">
            <img src={developer} alt="about" className="image-style" />
          </Col>
        </Row>
        <Row className="skill-tools-wrapper">
          <AboutSkills />
        </Row>

      </Container>
    </Container>
  );
}

export default About;
