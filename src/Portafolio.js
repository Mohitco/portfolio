import React from "react";
import "./Portafolio.css";
/* import "./Pfjs.js"; */
import video1 from "./resources/videos/galaxy.mp4";
import video2 from "./resources/videos/blackhole.mp4";
import LogoBizon from "./resources/images/Bytezon.png";
import animacion2 from "./resources/videos/animacion2.mp4";
import grid1 from "./resources/images/grid1.png";
import grid2 from "./resources/images/grid2.png";
import grid3 from "./resources/videos/glob.mp4";
import grid4 from "./resources/images/grid4.png";
import skillsTitle from "./resources/images/digitalbrain.png";
import proyecto1 from "./resources/images/proyecto1.png";
import slider1 from "./resources/images/1.png";
import slider2 from "./resources/images/2.png";
import slider3 from "./resources/images/3.png";
import slider4 from "./resources/images/4.png";
import slider5 from "./resources/images/5.png";
import slider6 from "./resources/images/6.png";
import futureproject from "./resources/images/futureprojects.png";
import habilidades from "./resources/videos/Cerebro.mp4";


function App() {
  return (
    <div class="Portafolio">
      <head>
        <link
          href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
          rel="stylesheet"
        />
      </head>
      <div class="container">
        <video
          class="back-vid"
          autoPlay
          loop
          muted
          playsInline
          src={video1}
        ></video>

        <header>
          <div class="left">
            <img src={LogoBizon} alt="logo" />
            <h1>
              <span class="gradient">Byte</span>zon
            </h1>
          </div>

          <ul>
            <li>
              <a href="#conoceme">CONÓCEME</a>
            </li>
            <li>
              <a href="#proyectos">PROYECTOS</a>
            </li>
            <li>
              <a href="#habilidades">HABILIDADES</a>
            </li>
          </ul>

          <div class="box-icons">
            <a
              href="https://github.com/Robin1420"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/robinzon-sanchez-gonzales-bb0716285/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=51931320429"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i class="bx bxl-whatsapp"></i>
            </a>
          </div>

          {/*  <div class="menu-icon">
            <i class="bx bx-menu"></i>
          </div> */}
        </header>

        {/* <div class="sidebar">
          <div class="close-icon">
            <i class="bx bx-x"></i>
          </div>
          <ul>
            <li><a href="#">HOME</a></li>
            <li><a href="#">CONOCEME</a></li>
            <li><a href="#">HABILIDADES</a></li>
            <li><a href="#">PROYECTOS</a></li>
          </ul>

        <div class="social-icons">

          <a href=""><i class="bx bxl-github"></i></a>
          <a href=""><i class="bx bxl-linkedin"></i></a>
          <a href=""><i class="bx bxl-whatsapp"></i></a>

        </div>



        </div> */}

        <div class="blackhole-box">
          <video
            loop
            autoPlay
            muted
            plays-inline
            src={video2}
            type="video/mp4"
          ></video>
        </div>

        <seccion class="hero">
          <div class="hero-info autoBlur">
            <div class="hero-info-title">
              <i class="bx bxl-sketch"></i>
              Developer en desarrollo
            </div>
            <h1>
              Creando mi camino Como <span class="gradient ">Developer</span>
            </h1>

            <p>
              Soy un programador junior en proceso de aprendizaje, con interés
              en el desarrollo web, integración de sistemas y tecnologías de la
              información. Actualmente, estoy ampliando mis conocimientos en
              programación. Explora mis proyectos y acompáñame en este
              crecimiento.
            </p>

            <a
              href="https://api.whatsapp.com/send?phone=51931320429"
              target="_blank"
              rel="noopener noreferrer"
              class="contact-button"
            >
              <i class="bx bxl-whatsapp"></i> Contactame
            </a>
          </div>

          <div class="hero-vid-box">
            <video
              class="autoBlur"
              autoPlay
              loop
              muted
              playsInline
              src={animacion2}
              type="video/mp4"
            ></video>
          </div>

          <div class="scroll-down"></div>
        </seccion>
      </div>

      <seccion id="conoceme" class="info-section">
        <h1 class="section-title autoDisplay">CONOCEME</h1>
        <div class="info-cards">
          {/* card 1 sobre mi  */}
          <div class="card">
            <h1>Hola, soy Robinzon</h1>
            <p>
              De en formación con pasión por la tecnología. En constante
              aprendizaje sobre desarrollo web, redes y sistemas, siempre
              explorando nuevas oportunidades y desafíos
            </p>
            <img src={grid1} alt="card-image" />
          </div>

          {/* fin de card 1 */}

          {/* card 2 habilidades */}

          <div class="card">
            <h1>Stack en formación</h1>
            <p>
              Desarrollando habilidades en frontend con HTML, CSS, JavaScript y
              React, mientras aprendo sobre bases de datos SQL y programación
              backend con PHP y Python.
            </p>
            <img src={grid2} alt="card-image" />
          </div>

          {/* fin de card 2 */}

          {/* card 3 ubicaion */}

          <div class="card">
            <h1>Apasionado por la tecnología y el desarrollo</h1>
            <p>
              Ubicado en Perú, en formación constante en programación y
              construcción de proyectos con HTML, CSS, JavaScript, React, SQL,
              PHP y Python.
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

          {/* fin de card 3 */}

          {/* card 4 pasion */}

          <div class="card">
            <h1>Pasión por la Programación</h1>
            <p>
              Resolver problemas y crear soluciones a través del código es el
              camino elegido. En constante aprendizaje, explorando nuevas
              tecnologías y mejorando habilidades en HTML, CSS, JavaScript,
              React, SQL, PHP y Python.
            </p>

            <img src={grid4} alt="card-image" />
          </div>

          {/* fin de card 4 */}
        </div>
      </seccion>
      {/* Proyectos */}
      <section id="proyectos" class="my-projects">
        <h1 class="section-title autoDisplay">PROYECTOS</h1>
        <div class="project-card">
          <div class="project-vidbox autoBlur">
            <img src={proyecto1} alt="" />
          </div>

          <div class="project-info fadeInRight">
            <h1>
              <span class="gradient">Portafolio</span> en React
            </h1>
            <p>
              Este es mi portafolio personal, desarrollado con React, donde
              muestro mis proyectos, habilidades y experiencia como programador.
              Incluye una interfaz moderna y dinámica, optimizada para una
              navegación intuitiva.
            </p>
            <a
              href="https://github.com/Robin1420/PortafolioReact"
              target="_blank"
              rel="noopener noreferrer"
              class="github-button"
            >
              <button>
                <i class="bx bxl-github"></i> Ver Código en GitHub
              </button>
            </a>
          </div>
        </div>

        <div class="project-card">
          <div class="project-vidbox autoBlur">
            <img src={proyecto1} alt="" />
          </div>

          <div class="project-info fadeInRight">
            <h1>
              <span class="gradient">Traductor</span> multilenguaje
            </h1>
            <p>
              Este proyecto es una aplicación web de traducción de idiomas en
              tiempo real, desarrollada con React. Permite a los usuarios
              traducir texto entre múltiples idiomas de manera rápida y
              sencilla.
            </p>
            <button>
              <i class="bx bxl-github"></i> Ver Código en GitHub
            </button>
          </div>
        </div>

        <div class="project-card">
          <h1>
            <span class="gradient">TRABAJANDO</span> EN FUTUROS PROYECTOS{" "}
            <span class="gradient">.......</span>{" "}
          </h1>
        </div>
      </section>

      <section id="habilidades" class="skills-section">
        <h1 class="section-title autoDisplay">HABILIDADES</h1>
        <div class="skills-box">
          <video
            className="skills-video"
            loop
            autoPlay
            muted
            playsInline
            src={habilidades}
            type="video/mp4"
          ></video>

          <div class="designer autoDisplay ">
            <h1 class="gradien">
              Diseño
              <span class="gradient">
                <i class="bx bx-laptop"></i>
              </span>
            </h1>
            <p>
              Tengo experiencia en HTML, CSS, JavaScript y PHP, además de
              conocimientos en frameworks como React y Django. También cuento
              con habilidades en administración de redes, instalación de cámaras
              y soporte técnico. Mi fortaleza radica en combinar la tecnología
              con soluciones prácticas para optimizar el rendimiento y la
              seguridad en entornos digitales.
            </p>
          </div>

          <div class="coder autoDisplay">
            <h1 class="gradien">
              Código
              <span class="gradient">
                <i class="bx bx-code-alt"></i>
              </span>
            </h1>
            <p>
              Tengo habilidades en HTML, CSS, JavaScript y frameworks como
              React. También cuento con experiencia en gestión de bases de datos
              con MySQL y en desarrollo backend con PHP. Además, tengo
              conocimientos en administración de redes, instalación de cámaras y
              soporte técnico.
            </p>
          </div>

          <div
            className="slider"
            reverse="true"
            style={{
              "--width": "100px",
              "--height": "100px",
              "--quantity": 6, // Cambiado a 6 porque hay 6 imágenes
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
