import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

const projectImage = (fileName) => `${process.env.PUBLIC_URL}/${fileName}`;

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
              imgPath={projectImage("PC.png")}
              isBlog={false}
              title="PC shop"
              description="Online PC shop to buy and sell computers and accessories. Built with react.js, Material-UI, and Firebase. Features include product listings, shopping cart, and user authentication."
              ghLink="https://github.com/0767878237/PC_shop"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImage("chatbot.png")}
              isBlog={false}
              title="Chatbot"
              description="A chatbot built with RAG (Retrieval-Augmented Generation) architecture. It uses a combination of a vector database and a language model to provide accurate and context-aware responses to user queries."
              ghLink="https://github.com/0767878237/chatbot"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImage("house.png")}
              isBlog={false}
              title="House Price Prediction"
              description="A machine learning model for predicting house prices based on various features. Built with Python and scikit-learn."
              ghLink="https://github.com/0767878237/house_predict"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImage("MNIST.png")}
              isBlog={false}
              title="MNIST Classification"
              description="A deep learning model for classifying handwritten digits from the MNIST dataset. Built with PyTorch and trained using Convolutional Neural Networks."
              ghLink="https://github.com/0767878237/MNIST"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={projectImage("classify.png")}
              isBlog={false}
              title="Dog vs Cat Classification"
              description="A machine learning model for classifying images of dogs and cats. Built with Python and scikit-learn."
              ghLink="https://github.com/0767878237/classify"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
