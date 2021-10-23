import React, { useRef } from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import '../../styles/components/sections/about.scss'

export default function About() {
  const revealContainer = useRef(null);
  const skills = ['JavaScript (ES6+)', 'React', 'Python', 'Vba/Vb.net', 'Node.js', 'firebase', 'mongo'];

  return (
    <section className='aboutSection' id='about' ref={revealContainer}>
      <h2 className="numbered-heading">Sobre Mi</h2>

      <div className="inner">
        <div className='styledText'>
          <div>
            <p>
              Hola! Mi nombre es juan camilo chaparro, soy ingeniero industrial de la Universidad 
              Antonio Nariño y Software Developer, mi interes por la automatizacion y la eficiencia de
              los procesos, me acerco por primera vez a la programacion en el año 2018.
            </p>

            <p>
              El inicio de esta etapa de mi vida inicia con un reto, presentar como proyecto de grado un modelo de gestion 
              de rutas basado en el problema VRP para la optimizacion del sistema de recoleccion de RSU, esta esperiencia me 
              permitio participar en varios proyectos de desarollo de software basdado en la automatizacion y optimizacion, ademas 
              de iniciar mi primer emprendimiento <a href='https://www.instagram.com/5eonn/' target='_blank'>5EON</a>
            </p>

            <p>
              Estas experiencias me  han otorgado multidisciplinaridad y flexibilidad, manteniendo mi enfoque principal, seguir creando
              productos rapidos, accesibles y con una excelente experiencia digital.
            </p>

            <p>Estas son algunas de las tecnologías con las que he trabajado:</p>
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
              formats={['AUTO', 'WEBP', 'AVIF']}
              alt="Headshot"
            />
          </div>
        </div>
      </div>
    </section>
  );
};
