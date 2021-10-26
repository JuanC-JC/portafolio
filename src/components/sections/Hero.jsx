import React from 'react';
import '../../styles/components/sections/hero.scss';
// ❤️💜🖤
export default function Hero() {
  return (
    <section className='heroSection'>
      <h1>Hola, mi nombre es </h1>
      <h2 className="big-heading">Juan Camilo</h2>
      <h3 className="big-heading">i ❤️ code and sleep</h3>
      <p>
        Soy Ingeniero Industrial, Software developer, y ocasionalmente diseñador, soy un apasionado del
        aprendizaje y compartir de él, hace parte de este sueño llamado vida.
      </p>
      <a
        className="button button--big"
        href="https://www.linkedin.com"
        target="_blank"
        rel="noreferrer">
        Contactame!
      </a>
    </section>
  );
};
