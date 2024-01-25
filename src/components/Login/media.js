import React from 'react';
import './LogIn.css';
import git from '../../Assets/git.svg'
import linkedin from '../../Assets/linkedin.svg'
import x from '../../Assets/x.svg'
import discord from '../../Assets/carbon_logo-discord.svg'

const Media = () => {
  return (
    <div className="socials__wrapper">
      <ul className="socials__links">
        <li>
          <a href="https://github.com/Dixitraj281" target="blank" className="social__link">
            <img src={git} alt="git" />
          </a>
        </li>
        <li>
          <a
            href="https://twitter.com/"
            target="blank"
            className="social__link"
          >
            <img src={linkedin} alt="linkedin" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dixitraj28/"
            target="blank"
            className="social__link"
          >
            <img src={x} alt="x" />
          </a>
        </li>
        <li>
          <a
            href="https://discord.com/"
            target="blank"
            className="social__link"
          >
           <img src={discord} alt="discord" />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Media;