import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/Alex.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I fell in love with programming and I have at least learnt
              something, I think… 🤷‍♂️
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C/C++, Javascript and Python. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              <i>
                <b className="purple">AI Bot Technologies and WebSite Development </b> and
                also in areas related to{" "}
                <b className="purple">
                  Blockchain.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              with <b className="purple">Node.js</b> and
              <i>
                <b className="purple">
                  {" "}
                  Modern Javascript Library and Frameworks
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
              <br />
              I enjoy taking on new <b className="purple">challenges</b> and solving <b className="purple">complex</b> programming tasks. 
              <br />
              Last 2 years, I have shifted my focus towards <b className="purple">Bot Development</b>, such as <b className="purple">Telegram</b> & <b className="purple">Discord</b> Bot and <b className="purple">Cypto Trading</b> Bot. I have worked mostly in <b className="purple">Solana trading</b> bots, specializing in <b className="purple">sandwitch</b>, <b className="purple">sniper</b>, and <b className="purple">arbitrage</b> strategies. 
            </p>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me <a
                  href="https://github.com/AlexanderCruciata"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
