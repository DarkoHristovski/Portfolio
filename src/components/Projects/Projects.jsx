import { useState } from "react";
import { motion } from "framer-motion";
import "./projects.css";


const projectsList=[
    {
      id:1,
        name:"FitLife",
        url:'https://fitlife-dev.onrender.com/landingPage',
        img:'https://res.cloudinary.com/dute4bfhz/image/upload/v1708351339/fitlife_swmb7r.png',
        description: "This project marks the culmination of my bootcamp journey, serving as the final collaborative effort with two fellow developers. FitLife: Your personalized fitness companion! Track your workouts, set goals, and monitor progress seamlessly. With tailored exercise plans achieving your health goals has never been easier. Join the community, stay motivated, and embrace a healthier lifestyle with FitLife!",
        technologies: ["React", "Node.js", "Express.js", "MongoDB", "API"]
      },
    
      {
        id:2,
        name:"ToDoApp",
        url:'https://darkos-todo-app.netlify.app/',
        img:'https://res.cloudinary.com/dute4bfhz/image/upload/v1708351468/todo-app_mnhsel.png',
        description: "The Todo app is a CRUD (Create, Read, Update, Delete) application, designed to offer full control over your tasks. With CRUD functionality, you can effortlessly create new tasks, view existing ones, update their status or details, and delete tasks as needed. This versatility empowers users to manage their to-do lists dynamically, ensuring a seamless and efficient task management experience.",
        technologies: ["HTML5","CSS3","React"]
      },
      {
        id:3,
        name:"MovieApp",
        url:'https://movie-friend.netlify.app/',
        img:'https://res.cloudinary.com/dute4bfhz/image/upload/v1708384736/movieapp_uivufk.png',
        description: "Our React Movie CRUD app simplifies managing movie data by providing Create, Read, Update, and Delete functionalities. With an intuitive user interface, users can effortlessly add new movies, view existing ones, update details, and remove entries. Seamlessly integrating React components, state management, and API calls, our app offers a seamless experience for both users and developers.",
        technologies: ["HTML5","CSS3","React", "Headless CMS", "API"]
      },
]


const fadInProjects = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};


const Projects = () => {
  const [project] = useState(projectsList);
  console.log(project);
  return (
    <section id="projects" className="projects-section section-padding">
        <motion.h2
         variants={fadInProjects}
         initial="initial"
         whileInView="animate"
         viewport={{ once: true }}
         transition={{ duration:0.3, delay:0.2 }}
   
        
        className="project-title text-center">Projects</motion.h2>
      <div className="container">
        {project.map((x,index) => {
          return (
            <motion.div
              key={x.id}
              variants={fadInProjects}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              transition={{ duration:0.5, delay: index * 0.5 }}
              className="project card"
            >
              <a href={x.url} target="_blank" rel="noreferrer noopener">
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
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
