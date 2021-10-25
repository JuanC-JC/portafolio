import React from 'react';
import '../styles/components/footer.scss';
import { Icon } from '@components/icons';
import { socialMedia } from '@config';

const Footer = () => {
  return (
    <div className="footer">
      <div className="socialLinks">
        <ul>
          {socialMedia.map(({ name, url }, i) => (
            <li key={i}>
              <a href={url} aria-label={name}>
                <Icon name={name} />
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div className="credit">
        <a href="https://github.com/bchiang7/v4">Designed by Brittany Chiang </a>
        <span>|</span>
        <a href="https://github.com/isabelajs">Built by Juan Camilo JC</a>
      </div>
    </div>
  )
}

export default Footer;