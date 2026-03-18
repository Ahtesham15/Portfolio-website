import React, { useState, useRef } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import Particle from "../Particle";
import { AiOutlineMail, AiOutlinePhone, AiOutlineUser } from "react-icons/ai";
import { MdOutlineMessage } from "react-icons/md";

const SERVICE_ID = "service_o4ds26m";
const TEMPLATE_ID = "template_htven7u";
const PUBLIC_KEY = "AP6u5FjlrF-1EZ11W";

function Contact() {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); // idle | sending | success | error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY).then(
      () => setStatus("success"),
      () => setStatus("error")
    );
  };

  const handleReset = () => {
    setStatus("idle");
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Col md={8} className="contact-form-col">
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px", textAlign: "center" }}>
              Get In <strong className="purple">Touch</strong>
            </h1>
            <p className="contact-subtext">
              Have a question or want to work together? Fill out the form below!
            </p>

            {status === "success" ? (
              <div className="contact-success">
                <h3>Message Sent!</h3>
                <p>Thanks for reaching out. I'll get back to you soon.</p>
                <Button className="contact-btn" onClick={handleReset}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <Form ref={formRef} onSubmit={handleSubmit}>
                <Form.Group className="mb-4" controlId="formName">
                  <Form.Label className="contact-label">
                    <AiOutlineUser className="contact-icon" /> Name
                  </Form.Label>
                  <Form.Control
                    type="text"
                    name="from_name"
                    placeholder="Your full name"
                    required
                    className="contact-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formEmail">
                  <Form.Label className="contact-label">
                    <AiOutlineMail className="contact-icon" /> Email <span className="contact-required">*</span>
                  </Form.Label>
                  <Form.Control
                    type="email"
                    name="from_email"
                    placeholder="your@email.com"
                    required
                    className="contact-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formContact">
                  <Form.Label className="contact-label">
                    <AiOutlinePhone className="contact-icon" /> Phone Number{" "}
                    <span className="contact-optional">(optional)</span>
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    name="phone"
                    placeholder="+1 (555) 000-0000"
                    className="contact-input"
                  />
                </Form.Group>

                <Form.Group className="mb-4" controlId="formMessage">
                  <Form.Label className="contact-label">
                    <MdOutlineMessage className="contact-icon" /> Message
                  </Form.Label>
                  <Form.Control
                    as="textarea"
                    name="message"
                    rows={5}
                    placeholder="Write your message here..."
                    required
                    className="contact-input"
                  />
                </Form.Group>

                {status === "error" && (
                  <p className="contact-error">
                    Something went wrong. Please try again.
                  </p>
                )}

                <div style={{ textAlign: "center" }}>
                  <Button
                    type="submit"
                    className="contact-btn"
                    disabled={status === "sending"}
                  >
                    {status === "sending" ? "Sending..." : "Send Message"}
                  </Button>
                </div>
              </Form>
            )}
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
