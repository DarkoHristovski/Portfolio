import { useState } from "react";
import projectsList from "../../projectsList";
import "./projects.css";

const Projects = () => {
  const [project] = useState(projectsList);
  console.log(project);
  return (
    <section id="projects" className="projects-section section-padding">
        <h2 className="text-center">Projects</h2>
      <div className="container">
        {project.map((x) => {
          return (
            <div
              key={x.id}
              className="project card"
            >
              <a href="/">
                <div className="img-wrapper">
                    <img src={x.img} alt="" />
                </div>
                <div className="project-info">
                  <h4>{x.name}</h4>
                  <h5>Description:</h5>
                  <p>{x.description}</p>
                  <h5>Technologies:</h5>
                  <p>{x.technologies.join(', ')}</p>
                </div>
              </a>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
