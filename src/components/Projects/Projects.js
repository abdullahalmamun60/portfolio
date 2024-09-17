import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Hotgadget from "../../Assets/Projects/Hotgadget.png";
import PandaCommerce from "../../Assets/Projects/PandaCommerce.png";
import RuetBank from "../../Assets/Projects/RuetBank.png";
import calculator from "../../Assets/Projects/calculator.png";
import weather from "../../Assets/Projects/weather.png";
import pinmatch from "../../Assets/Projects/pinmatch.png";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hotgadget}
              isBlog={false}
              title="Hot Gadget"
              description="An e-commerce site is an online platform that facilitates the buying and selling of products or services. It provides a digital storefront where users can browse items, read reviews, and make purchases securely. Features typically include various payment options, user accounts, and customer support, all designed to create a seamless and efficient shopping experience for users globally."
              ghLink="https://github.com/abdullahalmamun60/hot-gadget"
              demoLink="https://abdullahalmamun60.github.io/hot-gadget/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={PandaCommerce}
              isBlog={false}
              title="Panda Commerce"
              description="An e-commerce site is an online platform that facilitates the buying and selling of products or services. It provides a digital storefront where users can browse items, read reviews, and make purchases securely. Features typically include various payment options, user accounts, and customer support, all designed to create a seamless and efficient shopping experience for users globally."
              ghLink="https://github.com/abdullahalmamun60/panda-commerce"
              demoLink="https://abdullahalmamun60.github.io/panda-commerce/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={RuetBank}
              isBlog={false}
              title="Ruet Bank"
              description="A small bank JavaScript project is a coding exercise where developers create a simplified banking system using JavaScript. It typically includes features like account creation, balance management, and basic transactions such as deposits and withdrawals. This project helps beginners understand core programming concepts, data handling, and basic algorithms, all while simulating real-world financial operations in a controlled environment."
              ghLink="https://github.com/abdullahalmamun60/ruet-bank"
              demoLink="https://abdullahalmamun60.github.io/ruet-bank/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={calculator}
              isBlog={false}
              title="Calculator"
              description="A calculator JavaScript project involves building a basic calculator application using JavaScript. This project typically includes functionalities for arithmetic operations such as addition, subtraction, multiplication, and division. Developers use HTML for the user interface and CSS for styling, while JavaScript handles the logic for calculations and user interactions. It’s a practical way to learn about event handling, DOM manipulation, and basic algorithm implementation."
              ghLink="https://github.com/abdullahalmamun60/calculator"
              demoLink="https://abdullahalmamun60.github.io/calculator/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pinmatch}
              isBlog={false}
              title="OTP Pin Match"
              description="An OTP (One-Time Password) pin match project is a security-focused application where users authenticate their identity using a temporary code. Typically implemented with JavaScript, this project involves generating a random OTP, sending it to the user via email or SMS, and then validating the entered OTP against the generated one. It helps developers understand user authentication, secure data handling, and real-time verification processes"
              ghLink="https://github.com/abdullahalmamun60/pin-match"
              demoLink="https://abdullahalmamun60.github.io/pin-match/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Update"
              description="
A weather update project that fetches real-time data from an API involves creating an application that retrieves and displays current weather conditions. Using JavaScript, developers make HTTP requests to a weather API (like OpenWeatherMap or WeatherAPI), parse the returned data, and present it in a user-friendly format. This project teaches skills in API integration, asynchronous programming, and data visualization."
              ghLink="https://github.com/abdullahalmamun60/weather_update"
              demoLink="https://abdullahalmamun60.github.io/weather_update/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
