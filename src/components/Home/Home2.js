import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Resource/profile.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and have been learning and growing ever since! 🤷‍♂️
              <br />
              <br />
              I’m fluent in classics like <i><b className="purple">C++, JavaScript, and Python.</b></i> My interests lie in developing new web technologies and products.
              <br />
              <br />
              I’m passionate about building innovative solutions using <b className="purple">Node.js</b> and modern JavaScript libraries and frameworks such as <i><b className="purple">React.js</b></i>. My journey also includes experience in <i><b className="purple">MATLAB, HTML, CSS, Bootstrap, and Tailwind</b></i>, along with research in <span className="purple"><i><b>Power Electronics</b></i></span>.
              <br />
              <br />
              I’m excited to continue exploring and contributing to the tech world!
            </p>
          </Col>


          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/abdullahalmamun60"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/abdullah-al-mamun-18b914293/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mamun_nation?igsh=MTk3MmVsMngxdzNpeQ=="
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
