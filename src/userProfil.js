const developer = {
  name: "Darko",
  lastName: "Hristovski",
  description:"A passionate web developer with expertise in front-end and back-end technologies.",
  about:"I'm a passionate junior web developer specializing in React and the MERN (MongoDB, Express.js, React.js, Node.js) stack. With a strong foundation in front-end development and a knack for creating intuitive user interfaces, I strive to build engaging web applications that not only look great but also provide seamless user experiences.",
  email: "hristovski15@gmail.com",
  stacks: [
    {
      id:1,
      img:'../src/assets/frontend.svg',
      name: "Front-End Development",
      languages: ["HTML","CSS3","JavaScript", "React"],
      tools: ["Bootstrap", "Tailwind"],
    },
    {
      id:2,
      img:'../src/assets/backend.svg',
      name: "Back-End Development",
      languages: ["Node.JS", "NoSQL", "SQL"],
      tools: ["Express", "PostgreSQL", "Mongo DB",  "GitHub", "Netfliy"],
    },
    {
      id:3,
      img:'../src/assets/trello.svg',
      name: "Practices",
      languages: ["Agile", "SCRUM"],
      tools: ["Trello", "Slack", "Discord"],
    },
  ],
  projects: [
    {
      title: "Project 1",
      description:
        "A responsive website built using HTML, CSS, and JavaScript. Implemented modern design principles and animations for a sleek user experience.",
      technologies: ["HTML", "CSS", "JavaScript"],
    },
    {
      title: "Project 2",
      description:"An e-commerce platform developed with React.js and Node.js. Integrated with Stripe API for secure payment processing.",
      technologies: ["React.js", "Node.js", "Stripe API"],
    },
    // Add more projects as needed
  ],
  // You can add more properties such as education, experience, etc.
};
export default developer;
