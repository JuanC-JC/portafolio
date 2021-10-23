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
        Soy Ingeniero Industrial and Software developer,
        I’m a software engineer specializing in building (and occasionally designing) exceptional
        digital experiences. Currently, I’m focused on building accessible, human-centered products
        at
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
