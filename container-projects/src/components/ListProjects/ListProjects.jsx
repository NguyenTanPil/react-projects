import React from 'react';
import { Project } from './Project';
// import projects from './data.js';

import './ListProjects.scss';

export const ListProjects = ({ projects }) => {
  return (
    <section className="list-projects">
      <div className="list-projects__title">
        <h2>basic projects</h2>
        <div className="underline"></div>
      </div>
      <div className="list-projects__items">
        {projects.map((project) => {
          return <Project key={project.id} {...project} />;
        })}
      </div>
    </section>
  );
};
