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
              ghLink="https://github.com/AlexanderCruciata/Solana-Raydium-bot"
              //demoLink="https://chatify-49.web.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Token Swap Program"
              description="This project demonstrates how to perform a token swap on the Solana blockchain using Raydium and Chainstack. The example specifically illustrates swapping SOL (native Solana token) for USDC (a stablecoin)."
              ghLink="https://github.com/AlexanderCruciata/Token-swap-program"
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
              title="My own Solana Token"
              description="A simple Solana Smart Contract for minting NFTs
              ArtToken (ART) - ERC 20 Token ERC20 Token - With sell, buy, mint and transfer functions.This repository has the tokens as single files. This makes it easier for contributors to add new tokens, for reviewers to get a good view on the change and also makes it easier to merge in tokens from other sources. "
              ghLink="https://github.com/AlexanderCruciata/My-token"
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
