import React, { useRef } from 'react';
import { email } from '@config';
import '../../styles/components/sections/contact.scss';

export default function Contact() {
  const revealContainer = useRef(null);
  return (
    <section id='contact' ref={revealContainer}>
      <h2 className="numbered-heading overline">What’s Next?</h2>

      <h2 className="title">Get In Touch</h2>

      <p>
        Although I’m not currently looking for any new opportunities, my inbox is always open.
        Whether you have a question or just want to say hi, I’ll try my best to get back to you!
      </p>

      <a className="button button--big" href={`mailto:${email}`}>
        Say Hello
      </a>
    </section>
  );
};
