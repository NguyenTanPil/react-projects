import React from 'react';

export const Project = ({ link, name, image }) => {
  return (
    <a
      className="list-projects__items__project"
      href={link}
      rel="noreferrer noopener"
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
