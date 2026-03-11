import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/my-avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
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
              I enjoy solving real-world problems through{" "}
              <b className="purple">intelligent AI systems </b>
              and building scalable, data-driven applications.
              <br />
              <br />
              I am proficient in languages like
              <i>
                <b className="purple"> Python and SQL. </b>
              </i>
              <br />
              <br />
              My field of interest includes working on &nbsp;
              <i>
                <b className="purple">Large Language Models (LLMs) </b>, building
                <b className="purple"> Retrieval-Augmented Generation (RAG) systems</b>, and designing
                <b className="purple"> Agentic AI Workflows.</b>
              </i>
              <br />
              <br />
              I love building impactful solutions using{" "}
              <b className="purple">LangChain and LangGraph</b> and frameworks like
              <i>
                <b className="purple"> FastAPI, Streamlit, and PostgreSQL.</b>
              </i>
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
                  href="https://github.com/Ahtesham15"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/ahtesham-pathan"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
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
