import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import editor from "../../Assets/Projects/Skyline.jpg";
import chatify from "../../Assets/Projects/balances.png";
import bitsOfCode from "../../Assets/Projects/screen.png";
import raydium from "../../Assets/Projects/tradingbot.png";
import sniper from "../../Assets/Projects/sniper.png";
import villa from "../../Assets/Projects/villa.png";
import mytoken from "../../Assets/Projects/mytoken.png";

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
              imgPath={raydium}
              isBlog={false}
              title="Solana Raydium Bot"
              description="This is a Raydium bot based on the solana. This bot fetches the real-time trading data from raydium pool using WebSocket RPC."
              ghLink="https://github.com/AlexanderCruciata/raydium-bot"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={villa}
              isBlog={false}
              title="Villa Luxe Hotel"
              description="Villa Luxe is a hotel website that can be used for online reservations. Built using the TALL Stack: Tailwind CSS3, AlpineJS, Livewire2, Laravel. I actually made the UI here myself using Tailwind CSS and AplineJS without using any templates at all."
              ghLink="https://github.com/AlexanderCruciata/Villa-Luxe"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sniper}
              isBlog={false}
              title="AI PNL Bot"
              description="Developed a solana PNL bot using Solana and Web3.js.
              This bot analyze the specific token and obeserve the PNL price of token using  CoinMarket API and Web3 API."
              ghLink="https://github.com/AlexanderCruciata/AI-PNL-Bot"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mytoken}
              isBlog={false}
              title="My own Ethereum Token"
              description="A simple Solana Smart Contract for minting NFTs
              ArtToken (ART) - ERC 20 Token ERC20 Token - With sell, buy, mint and transfer functions.This repository has the tokens as single files. This makes it easier for contributors to add new tokens, for reviewers to get a good view on the change and also makes it easier to merge in tokens from other sources. "
              ghLink="https://github.com/AlexanderCruciata/My-token"
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
              title="Big Sky Lodge Hotel"
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
