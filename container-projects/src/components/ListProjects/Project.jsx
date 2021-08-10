import React from 'react';

export const Project = ({ name, image }) => {
  return (
    <a
      className="list-projects__items__project"
      href="https://github.com/"
      target="_blank"
    >
      <div className="list-projects__items__project__image-wrapper">
        <div>
          <img src={image} alt={name} />
        </div>
      </div>
      <h5>{name}</h5>
    </a>
  );
};
