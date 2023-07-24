import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GPA from "../../Assets/Projects/GPA-calc.png";
// import emotion from "../../Assets/Projects/emotion.png";
import tictactoe from "../../Assets/Projects/tic-tac-toe.png";
import emojihub from "../../Assets/Projects/emoji-hub.png";
import suicide from "../../Assets/Projects/suicide.png";
import portfolio from "../../Assets/Projects/portfolio.png";

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
              imgPath={portfolio}
              isBlog={false}
              title="Portfolio"
              description="My personal blog page build with Next.js and Tailwind Css which takes the content from makdown files and renders it using Next.js."
              ghLink="https://github.com/shu4bham/Portfolio"
              demoLink="https://shu4bham.live//"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={GPA}
              isBlog={false}
              title="GPA Calculator"
              description="GPA Calculator is a web application built using HTML, CSS, and JavaScript that allows users to calculate their Grade Point Average (GPA) based on the grades they received and the credits assigned to each course. It offers a user-friendly interface where users can input the course name, grade received, and course credits for multiple courses across various semesters."
              ghLink="https://github.com/shu4bham/GPA-Calculator"
              demoLink="https://gpa-calculator-shu4bham.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emojihub}
              isBlog={false}
              title="Emoji Hub"
              description="Emoji hub Emoji Hub is a web application that allows users to conveniently browse and explore a wide range of emojis. With a user-friendly interface, it provides an interactive way to discover and utilize emojis for various purposes."
              ghLink="https://github.com/Shu4bham/Emoji-Hub-web-app.git"
              demoLink="http://emojihub.me/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tictactoe}
              isBlog={false}
              title="TIC-TAC-TOE"
              description="TIC-TAC-TOE is a beloved and strategic two-player game developed using HTML, CSS, and JavaScript. This GitHub repository houses the source code for the digital rendition of the classic game, providing a delightful gaming experience for users to enjoy with friends and family."
              ghLink="https://github.com/shu4bham/TIC-TAC-TOE"
              demoLink="https://shu4bham-tic-tac-toe.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Prank Yourself"
              description="My name is giovanni giorgio but everybody calls me giorgio"
              ghLink="https://youtube.com/shorts/EmGpHyR8iyM?feature=share"
              demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/shu4bham/Face_And_Emotion_Detection"
              // demoLink="https://shu4bham.live/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
