import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import Particle from "../Particle";
import { BsLink45Deg } from "react-icons/bs";

function Certifications() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Certifications </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are some of the certifications I've earned.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Claude Code: A Highly Agentic Coding Assistant</Card.Title>
                <Card.Text>
                  Issued by Deeplearning.AI. Covers using Claude Code as an agentic coding assistant for advanced software engineering workflows.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://learn.deeplearning.ai/accomplishments/c91ece49-53c2-4cf3-90bc-515b424d987c?usp=sharing"
                  target="_blank"
                >
                  <BsLink45Deg /> &nbsp; View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Supervised Machine Learning: Classification (Part I)</Card.Title>
                <Card.Text>
                  Issued by Coursera. Covers supervised learning algorithms including classification models, evaluation metrics, and practical applications.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://coursera.org/share/28d87f5ad9bd8dba4dc7f4f6a29aa911"
                  target="_blank"
                >
                  <BsLink45Deg /> &nbsp; View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

          <Col md={6} className="project-card">
            <Card className="project-card-view">
              <Card.Body>
                <Card.Title>Supervised Machine Learning: Classification (Part II)</Card.Title>
                <Card.Text>
                  Issued by Coursera. Continues the study of supervised machine learning with a focus on advanced classification techniques and model optimization.
                </Card.Text>
                <Button
                  variant="primary"
                  href="https://coursera.org/share/0f1ab15e61cadb174e29bdfba5df45ef"
                  target="_blank"
                >
                  <BsLink45Deg /> &nbsp; View Certificate
                </Button>
              </Card.Body>
            </Card>
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Certifications;
