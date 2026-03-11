import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Ahtesham Pathan </span>
            from <span className="purple"> the University of Liverpool.</span>
            <br />
            I'm a Data Science and AI graduate with a strong interest in building
            intelligent, real-world applications using machine learning and generative AI.
            My background includes working on projects involving large language models,
            retrieval-augmented generation (RAG), and data-driven decision systems.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Contributing to Open-Source Projects
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New AI Technologies
            </li>
            <li className="about-activity">
              <ImPointRight /> Building Scalable AI Systems
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Keep learning, growing, and building things that matter!"{" "}
          </p>
          <footer className="blockquote-footer">Ahtesham Pathan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
