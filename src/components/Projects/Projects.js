import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import ragImg from "../../Assets/Projects/sentiment.png";
import chatbotImg from "../../Assets/Projects/spotify.png";

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
              imgPath={ragImg}
              isBlog={false}
              title="YouTube Question Answering System (RAG-based)"
              description="Built a Retrieval-Augmented Generation (RAG) system that allows users to ask questions about YouTube videos. The system extracts transcripts, chunks the text, stores embeddings in a vector database, and uses a large language model to generate contextual answers based on retrieved content."
              ghLink="https://github.com/Ahtesham15"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbotImg}
              isBlog={false}
              title="AI Chatbot with Long-Term Memory"
              description="Developed an AI-powered chatbot using LangChain and LangGraph with a Streamlit frontend for interactive conversations. Implemented long-term memory using PostgreSQL to persist conversation history and used threading-based persistence to maintain session context. Integrated LangSmith for observability, enabling monitoring, debugging, and tracing of the agent workflow."
              ghLink="https://github.com/Ahtesham15/langgraph-chatbot"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
