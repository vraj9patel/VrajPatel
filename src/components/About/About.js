import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/cr-side.jpeg";
import Tilt from "react-parallax-tilt";
import Footer from "../../components/Footer";
// import Particle from "../Particle";
// import Github from "./Github";
// import Techstack from "./Techstack";
// import Aboutcard from "./AboutCard";
// import laptopImg from "../../Assets/about.png";
// import Toolstack from "./Toolstack";
import { ProgrammingLanguages, WebTechnologies, Frameworks, PythonLib, Databases, DevTools } from "./TechnologyStack";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn, FaDiscord } from "react-icons/fa";

function About() {
  return (
    <Container fluid className="about-section">
      {/* <Particle /> */}
      <Container>
      <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
            Hi, I’m <b className="purple"> Vraj Patel</b>. I spend my days tapping on keyboards and Googling stuff. Like, all day. I am an Author/Writer. Most humans don't understand my literature but machines do.<br />
              <br />I am fluent in classic programming languages like
              <i>
                <b className="purple"> C, C++, C#, Java, Javascript and Python. </b>
              </i>
              <br />
              <br />
              I am interested in developing and designing &nbsp;
              <i>
                <b className="purple">Software Products and Web Technologies</b></i> and
                also enthusiast about &nbsp;
                <i>
                <b className="purple">
                  Data Science and Machine Learning.
                </b>
              </i>
              <br />
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <br />

        <h1 className="project-heading">
          <strong className="purple">Programming Languages </strong> I am good in
        </h1>

        <ProgrammingLanguages />
        

        <h1 className="project-heading">
         <strong className="purple">Web Technologies</strong> I use
        </h1>
        <WebTechnologies />


        <h1 className="project-heading">
         <strong className="purple">Frameworks </strong> I work with
        </h1>
        <Frameworks />


        <h1 className="project-heading">
         <strong className="purple">Python Libraries</strong> I know
        </h1>
        <PythonLib />


        <h1 className="project-heading">
         <strong className="purple">Databases</strong> I prefer
        </h1>
        <Databases />


        <h1 className="project-heading">
         <strong className="purple">Developer Tools</strong> that help
        </h1>
        <DevTools />

        {/* <Github /> */}

        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/vraj9patel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/vraj-patel-66a0b31b5"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/vraj.9atel"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://discordapp.com/users/794666032592715836"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaDiscord />
                </a>
              </li>
            </ul>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
