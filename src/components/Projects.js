import React from 'react';
import './Projects.css';
import projectsData from '../data/projectsData';

function Projects() {
  return (
    <section className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectsData.map((project, index) => (
          <div key={index} className="project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p>
              <strong>Tech Stack:</strong> {project.techStack}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
