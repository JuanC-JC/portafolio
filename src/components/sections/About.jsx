import React, { useRef } from "react";
import { StaticImage } from "gatsby-plugin-image";
import "../../styles/components/sections/about.scss";

export default function About() {
  const revealContainer = useRef(null);
  const skills = [
    "JavaScript (ES6+)",
    "React",
    "Python",
    "Vba/Vb.net",
    "Node.js",
    "firebase",
    "mongo",
  ];

  return (
    <section className="aboutSection" id="about" ref={revealContainer}>
      <h2 className="numbered-heading">Sobre Mi</h2>

      <div className="inner">
        <div className="styledText">
          <div>
            <p>
              Hola! Mi nombre es Juan Camilo Ibáñez, soy Ingeniero Industrial de
              la Universidad Antonio Nariño y Desarrollador de software. Inicie
              en el área de la programación en el año 2018, gracias a mi interés
              constante por automatizar y mejorar los procesos.
            </p>

            <p>
              Mi primer acercamiento a la programación inicio gracias a un reto
              en la universidad, pues debía presentar como proyecto de grado un
              modelo de gestión de rutas basado en el problema VRP para la
              optimización del sistema de recolección de RSU, a partir de allí
              inicie a desarrollar software que me permitiera automatizar y
              optimizar la mayoria de procesos en los que estuviera a cargo,
              además de darme el impulso para fundar mi primer emprendimiento
              llamado {" "}
              <a href="https://www.instagram.com/5eonn/" target="_blank">
                5EON.
              </a>
            </p>

            <p>
              Estas experiencias me han otorgado multidisciplinaria y
              flexibilidad, manteniendo mi enfoque principal, seguir creando
              productos rápidos, accesibles y con una excelente experiencia
              digital.
            </p>

            <p>
              Estas son algunas de las tecnologías con las que he trabajado:
            </p>
          </div>

          <ul className="skills-list">
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </div>

        <div className="styledPic">
          <div className="wrapper">
            <StaticImage
              className="img"
              src="../../images/me.jpg"
              width={500}
              quality={95}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
