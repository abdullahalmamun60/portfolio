import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Mamun</span>, an undergraduate student in Electronics and Telecommunication Engineering (ETE) at RUET.
            <br />
            I am passionate about programming and technology, with skills in classics like <i><b className="purple">C++, JavaScript, and Python.</b></i>
            <br />
            My interests lie in developing new web technologies and products, and I’m also experienced with <i><b className="purple">Node.js, React.js</b></i>, along with a range of other technologies.
            <br />
            <br />
            I am currently working as a Campus Ambassador for <b className="purple">BDApps</b> and involved with <b className="purple">RCF</b>.
            <br />
            <br />
            Apart from programming, here are a few things I enjoy:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Exploring New Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open Source Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "I’m excited to continue exploring and contributing to the tech world!"{" "}
          </p>
          <footer className="blockquote-footer">Mamun</footer>
        </blockquote>



      </Card.Body>
    </Card>
  );
}

export default AboutCard;
