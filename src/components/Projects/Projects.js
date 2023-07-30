import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import GPA from "../../Assets/Projects/GPA-calc.png";
import shopify from "../../Assets/Projects/shopify.png";
import magma from "../../Assets/Projects/magma.png";
import magma from "../../Assets/Projects/emojicrypt.png";
import flixflow from "../../Assets/Projects/flix-flow.png";
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
              imgPath={magma}
              isBlog={false}
              title="Magma Clone"
              description="This is clone of the landing page of Thisismagma. Magma is a groundbreaking platform that integrates an interactive 3D model with blockchain layers, enabling collaboration between stakeholders in a secure, agile, and robust digital environment. It is a Web3 platform for all real estate stakeholders, which provides users with the ability to manage interactions between physical and digital assets. "
              ghLink="https://github.com/shu4bham/Magma"
              demoLink="https://magma-dtt.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shopify}
              isBlog={false}
              title="Shopify"
              description="Welcome to FlixFlow, where movie tracking gets a whole lot funkier! Keep the rhythm of your movie marathon with MovieWatchr, a groovy tool to log all your watched flicks in style.Show off your funky taste with FunkyFlix Ratings, shake it up, and rate movies according to your vibe. It's all about expressing yourself!"
              ghLink="https://github.com/shu4bham/Shopify"
              demoLink="https://shu4bham-shopify.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flixflow}
              isBlog={false}
              title="Flix-flow"
              description="Shopify is a stylish and contemporary clothing website built with HTML, CSS, and JavaScript, aimed at delivering an immersive shopping experience to fashion enthusiasts. This project showcases a modern design with sleek aesthetics and user-friendly navigation, ensuring seamless accessibility on various mobile devices."
              ghLink="https://github.com/shu4bham/Flix-flow"
              demoLink="https://flix-flow.vercel.app/"
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
              imgPath={emojicrypt}
              isBlog={false}
              title="Emojicrypt"
              description="A web-based project using HTML, CSS, and JavaScript that encrypts text into emoji representations and decrypts encrypted emojis back into text. Protect your messages with fun and secure emoji encryption!"
              ghLink="https://github.com/shu4bham/Emojicrypt"
              demoLink="https://emojicrypt.vercel.app/"
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
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
