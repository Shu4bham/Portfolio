import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shubham Kamboj </span>
            from <span className="purple"> Haryana, India.</span>
            <br />I am a Pre Final year Ungergrad pursuing Engineering in Information Technoogy from NIT Kurukshetra.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Things
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Think Twice, Code Once"{" "}
          </p>
          <footer className="blockquote-footer">Waseem Latif</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
