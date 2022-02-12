import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <a href="mailto:info@tanveer.info">
        <img src="./images/email.jpg" alt="" />
      </a>
      <a href="https://www.linkedin.com/in/tanveerhshah/">
        <img src="./images/linkedin.jpg" alt="" />
      </a>
      <a href="https://www.twitter.com/DrTanveerShah/">
        <img src="./images/twitter.jpg" alt="" />
      </a>
      <a href="https://github.com/tanveershah">
        <img src="./images/github.jpg" alt="" />
      </a>
    </div>
  );
};

export default Footer;
