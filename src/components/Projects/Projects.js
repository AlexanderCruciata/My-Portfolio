import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/Skyline.jpg";
import chatify from "../../Assets/Projects/balances.png";
import bitsOfCode from "../../Assets/Projects/screen.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Payment Platform"
              description="The platform is a financial management solution that simplifies the process of managing payments and balances. With it, users can easily record and manage payments while efficiently managing their available balances, providing a comprehensive and organized view of their financial transactions."
              ghLink="https://github.com/AlexanderCruciata/AdminPanel"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="OnlineShop"
              description="This is the source code of an application for building an e-commerce which can be modified from the browser to become a custom e-commerce or online store. It is built in javascript with Node.js and Mongodb, and it has no dependencies.It works on Node v.16 and Mongodb v.4. We cannot guarantee it would work on a different version."
              ghLink="https://github.com/AlexanderCruciata/OnlineShop"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Hotel Management"
              description="This project is a landing page (website) and management system for small-scale hotel operations with ability to manage/track revenue in short-term and long-term stays, email reservation confirmations, generate financial reports, as well as track housekeeping operations and maintenance logs for multiple motels with more features to come in the future!"
              ghLink="https://github.com/AlexanderCruciata/HotelManagement"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
