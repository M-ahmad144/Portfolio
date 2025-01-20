import React from "react";
import { FiTwitter, FiGithub, FiLinkedin } from "react-icons/fi";

const Social = () => {
  return (
    <div className="home__social">
      <a
        href="https://twitter.com"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiTwitter />
      </a>
      <a
        href="https://github.com/M-ahmad144"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/muhammad-ahmad-b1b197267"
        className="home__social-icon"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin />
      </a>
    </div>
  );
};

export default Social;
