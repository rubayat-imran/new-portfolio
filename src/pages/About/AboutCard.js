import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";
function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Rubayat Imran </span>
            from <span className="purple"> Dhaka, Bangladesh.</span>
            <br />
            I'm a Software Engineer who loves turning ideas into reality with code. I’ve got a good bit of experience creating custom websites using ReactJs, Redux, JavaScript, TypeScript, jQuery, HTML5, and CSS3.
            <br />
            I enjoy learning new things and keeping up with the latest in technology. My goal is always to deliver high-quality and efficient solutions that make a difference.
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul className="activity-list">
            <li className="about-activity">
              <ImPointRight /> Reading books
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring new places
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Listening to music
            </li>
          </ul>
          <p style={{ textAlign: "justify" }}>These activities help me stay balanced and bring a fresh perspective to my work.</p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
