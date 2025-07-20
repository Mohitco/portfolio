import React from "react";
import "./Portafolio.css";
import video1 from "./resources/videos/galaxy.mp4";
import video2 from "./resources/videos/blackhole.mp4";
import Logo from "./resources/images/logo.png";
import animacion2 from "./resources/videos/animacion2.mp4";
import grid1 from "./resources/images/grid1.png";
import grid2 from "./resources/images/grid2.png";
import grid3 from "./resources/videos/glob.mp4";
import grid4 from "./resources/images/grid4.png";
import project1 from "./resources/images/Project1.png";
import project2 from "./resources/images/Project2.png";
import project3 from "./resources/images/Project3.png";
import slider1 from "./resources/images/1.png";
import slider2 from "./resources/images/2.png";
import slider3 from "./resources/images/3.png";
import slider4 from "./resources/images/4.png";
import slider5 from "./resources/images/5.png";
import slider6 from "./resources/images/6.png";
import habilidades from "./resources/videos/Cerebro.mp4";

function App() {
  return (
    <div className="Portafolio">
      <header>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </header>
      <div className="container">
        <video
          className="back-vid"
          autoPlay
          loop
          muted
          playsInline
          src={video1}
        ></video>

        <header>
          <div className="left">
            <img src={Logo} alt="logo" />
            <h1>
              <span className="gradient">Aadarsh</span>Code
            </h1>
          </div>

          <ul>
            <li>
              <a href="#About">About</a>
            </li>
            <li>
              <a href="#Project">Projects</a>
            </li>
            <li>
              <a href="#Skills">Skills</a>
            </li>
          </ul>

          <div className="box-icons">
            <a
              href="https://github.com/Mohitco"
              target="_blank"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/aadarsh-kumar-b7229428a/"
              target="_blank"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=8847495990"
              target="_blank"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
          </div>
        </header>
        <div className="blackhole-box">
          <video
            loop
            autoPlay
            muted
            playsInline
            src={video2}
            type="video/mp4"
          ></video>
        </div>

        <section className="hero">
          <div className="hero-info autoBlur">
            <div className="hero-info-title">
              <i className="bx bxl-sketch"></i>
              Front-end Developer Pordtfolio
            </div>
            <h1>
              Providing <span className="gradient ">the best</span> Project{" "}
              <span className="gradient ">Experience</span>
            </h1>

            <p>
              I'm a Front-end developer with Experience in Website development.
              Check out My Skills
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=8847495990"
              target="_blank"
              className="contact-button"
            >
              <i className="bx bxl-whatsapp"></i> Contact Me
            </a>
          </div>

          <div className="hero-vid-box">
            <video
              className="autoBlur"
              autoPlay
              loop
              muted
              playsInline
              src={animacion2}
              type="video/mp4"
            ></video>
          </div>

          <div className="scroll-down"></div>
        </section>
      </div>

      <section id="About" className="info-section">
        <h1 className="section-title autoDisplay">Hi, Guys 👋</h1>
        <div className="info-cards">
          <div className="card">
            <h1>Hi, I'm Aadarsh</h1>
            <p>
              I'm a recent Computer Science graduate passionate about web
              development. I specialize in building full-stack applications
              using the MERN stack. Constantly learning, I explore new
              frameworks and emerging technologies. I'm driven by curiosity and
              the desire to create efficient, user-friendly solutions.
            </p>
            <img src={grid1} alt="card-image" />
          </div>

          <div className="card">
            <h1>Tech Stacks</h1>
            <p>
              I work with a diverse set of languages, frameworks, and tools to
              build scalable, high-performance applications tailored for modern
              web development.
            </p>

            <img src={grid2} alt="card-image" />
          </div>

          <div className="card">
            <h1>
              "I'm highly adaptable to different time zones, communication
              styles, and work locations, ensuring smooth collaboration across
              global teams.
            </h1>
            <p>
              Based in Rajpura, Punjab, I'm open to work opportunities and
              flexible with time zones, communication styles, and remote or
              on-site collaboration
            </p>
            <video
              autoPlay
              loop
              muted
              playsInline
              src={grid3}
              type="video/mp4"
            ></video>
          </div>

          <div className="card">
            <h1>My Passion for Coding</h1>
            <p>
              I’m passionate about solving problems and building meaningful
              solutions through code. As a constant learner, I’m always
              exploring new technologies and sharpening my skills in HTML, CSS,
              JavaScript, React, MySQL,MongoDB and Python,c++.
            </p>
            <img src={grid4} alt="card-image" />
          </div>
        </div>
      </section>

      <section id="Project" className="my-projects">
        <h1 className="section-title autoDisplay">My Projects 💻</h1>
        <div className="project-card">
          <div className="project-vidbox autoBlur">
            <img src={project1} alt="" />
          </div>

          <div className="project-info fadeInRight">
            <h1>
              <span className="gradient">E-commerce</span> Website
            </h1>
            <p>
              This is a fully responsive e-commerce website built with React,
              showcasing my skills in modern web development. It features a
              sleek, dynamic interface optimized for intuitive navigation and a
              smooth user experience. The project highlights my ability to
              create scalable, real-world applications with clean design and
              functionality.
            </p>

            <a
              href="#"
              target="_blank"
              className="github-button"
            >
              <button>
                <i className="bx bxl-github"></i> GitHub
              </button>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-vidbox autoBlur">
            <img src={project3} alt="" />
          </div>

          <div className="project-info fadeInRight">
            <h1>
              <span className="gradient">Web</span> Calculator
            </h1>
            <p>
              This is a simple, functional web calculator built using only HTML,
              CSS, and JavaScript. It features basic arithmetic operations with
              a user-friendly and responsive design. The project showcases my
              ability to create interactive web applications with a focus on
              clean code and seamless functionality.
            </p>

            <a
              href="#"
              target="_blank"
              className="github-button"
            >
              <button>
                <i className="bx bxl-github"></i> GitHub
              </button>
            </a>
          </div>
        </div>

        <div className="project-card">
          <div className="project-vidbox autoBlur">
            <img src={project2} alt="" />
          </div>

          <div className="project-info fadeInRight">
            <h1>
              <span className="gradient">Glof</span> Website Clone
            </h1>
            <p>
              This project is a front-end clone of the Glof website, built using
              HTML, CSS, JavaScript, and GSAP. It replicates a modern,
              interactive UI with smooth animations and responsive design,
              showcasing my skills in creating visually engaging web
              experiences.
            </p>

            <a
              href="#"
              target="_blank"
              className="github-button"
            >
              <button>
                <i className="bx bxl-github"></i> GitHub
              </button>
            </a>
          </div>
        </div>
      </section>

      <section id="Skills" className="skills-section">
        <h1 className="section-title autoDisplay">My Skills 🦾</h1>
        <div className="skills-box">
          <video
            className="skills-video"
            loop
            autoPlay
            muted
            playsInline
            src={habilidades}
            type="video/mp4"
          ></video>

          <div className="designer autoDisplay ">
            <h1 className="gradien">
              Designer
              <span className="gradient">
                <i className="bx bx-laptop"></i>
              </span>
            </h1>
            <p>
              I have hands-on experience with HTML, CSS, JavaScript, along with
              knowledge of powerful frameworks like React and Django. I also
              bring practical expertise in network administration, camera
              installation, and technical support. My strength lies in blending
              creative front-end design with real-world tech
              solutions—leveraging tools like GSAP and modern web technologies
              to deliver high-performance, secure, and visually engaging digital
              experiences.
            </p>
          </div>

          <div className="coder autoDisplay">
            <h1 className="gradien">
              Coding
              <span className="gradient">
                <i className="bx bx-code-alt"></i>
              </span>
            </h1>
            <p>
              I have strong coding skills in HTML, CSS, and JavaScript, along
              with hands-on experience using frameworks like React for front-end
              development. On the back-end, I’ve worked with MongoDB and MySQL
              for database management and server-side logic.
            </p>
          </div>

          <div
            className="slider"
            reverse="true"
            style={{
              "--width": "100px",
              "--height": "100px",
              "--quantity": 6,
            }}
          >
            <div className="list">
              <div className="item" style={{ "--position": 1 }}>
                <img src={slider1} alt="" />
              </div>
              <div className="item" style={{ "--position": 2 }}>
                <img src={slider2} alt="" />
              </div>
              <div className="item" style={{ "--position": 3 }}>
                <img src={slider3} alt="" />
              </div>
              <div className="item" style={{ "--position": 4 }}>
                <img src={slider4} alt="" />
              </div>
              <div className="item" style={{ "--position": 5 }}>
                <img src={slider5} alt="" />
              </div>
              <div className="item" style={{ "--position": 6 }}>
                <img src={slider6} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
