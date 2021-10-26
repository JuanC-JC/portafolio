import React from 'react';
import { Link } from 'gatsby';
import { navLinks } from '@config';
import { IconLogo } from '@components/icons';
import { Menu } from '@components'
import '../styles/components/header.scss';

const Header = () => {
  const ResumeLink = (
    <a className=" button button--small" href="/resume.pdf" target="_blank" rel='noreferrer'>
      Curriculum
    </a>
  );


  return (
    <div className="header">

      <Link to='/'>
        <IconLogo />
      </Link>

      <nav aria-label='' tabIndex='' className='styledLinks'>
        <ol>
          {navLinks &&
            navLinks.map(({ url, name }, i) => (
              <li key={i}>
                <Link to={url}>{name}</Link>
              </li>
            ))}
        </ol>
        <div>{ResumeLink}</div>
      </nav>

      <Menu />

    </div>

  )
}

export default Header