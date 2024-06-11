import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/imran.jpg";
import SocialMedia from "../../components/SocialMedia";
import TypeWriter from "./TypeWriter";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Container className="home-content">
          <Row>
            <div className="home-content-wrapper">
              <Col md={7} className="home-header">
                <h1 style={{ paddingBottom: 15 }} className="heading">
                  Hi There!{" "}
                  <span className="wave" role="img" aria-labelledby="wave">
                    👋🏻
                  </span>
                </h1>

                <h1 className="heading-name">
                  I'M <TypeWriter />
                  {/* <strong className="main-name"> Rubayat Imran</strong> */}
                </h1>

                <div className="heading-description blockquote">
                  <p>
                    I am a progress-driven, self-taught front-end developer. I find coding intuitive and have always pushed myself to learn the most effective ways to achieve positive results. I enjoy working with new technologies and collaborating with other developers.
                  </p>
                  <p>
                    Always eager to learn new technology stacks, I am excited to embark on my next journey as a web developer, bringing value to your company while working on innovative ideas.
                  </p>
                </div>
              </Col>

              <Col md={5} className="home-image">
                <img src={myImg} className="profile-pic" alt="avatar" />
              </Col>
            </div>
          </Row>
        </Container>
      </Container>
      <Container fluid className="home-about-section" id="about">
        <Container>
          <Row>
            <Col md={12} className="home-about-social">
              <h1 className="highlight-text main-header">Get in Touch</h1>
              <p className="main-copy">
                {" "}
                If you want to get in touch, call me at <strong class="highlight-text"><a href="tel:+8801732378414" class="c-custom-link">+8801732378414</a></strong> or send me an email.
                <br />
                <strong className="highlight-text add-padding">Feel free to connect with me on social media.</strong>
              </p>
              <SocialMedia />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
