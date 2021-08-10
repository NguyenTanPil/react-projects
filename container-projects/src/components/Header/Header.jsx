import React from 'react';
import './Header.scss';
import titleImage from '../../images/title-image.svg';

export const Header = () => {
  return (
    <header className="header">
      <div className="header-center">
        <div className="header-center__title">
          <h1>React projects</h1>
          <p>
            Projects are the most practical way to learn any language, and{' '}
            <span>React</span> is no exception. Solidify your knowledge of React
            by creating these cool projects.
          </p>
          <a
            className="btn header-btn"
            href="https://github.com/NguyenTanPil"
            _target="_blank"
          >
            Go to my Github
          </a>
        </div>
        <div className="header-center_img">
          <img src={titleImage} alt="project" />
        </div>
      </div>
    </header>
  );
};
