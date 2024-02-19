import { useState } from "react";
import "./projects.css";


const projectsList=[
    {
      id:1,
        name:"FitLife",
        img:'https://res-console.cloudinary.com/dute4bfhz/thumbnails/v1/image/upload/v1708351339/Zml0bGlmZV9zd21iN3I=/preview',
        description: "A fully functional e-commerce website built with React.js and Node.js. Integrated with a payment gateway for secure transactions.",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"]
      },
      {
        id:2,
        name:"WeatherApp",
        img:'https://res.cloudinary.com/dute4bfhz/image/upload/v1708351468/todo-app_mnhsel.png',
        description: "A fully functional e-commerce website built with React.js and Node.js. Integrated with a payment gateway for secure transactions.",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"]
      },
      {
        id:3,
        name:"ToDoApp",
        img:'https://res.cloudinary.com/dute4bfhz/image/upload/v1708351468/todo-app_mnhsel.png',
        description: "A fully functional e-commerce website built with React.js and Node.js. Integrated with a payment gateway for secure transactions.",
        technologies: ["React.js", "Node.js", "Express.js", "MongoDB", "Stripe API"]
      }
]


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
