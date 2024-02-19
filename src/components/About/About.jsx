import frontend from '../../assets/frontend.svg'
import './about.css'


const developer = {
  name: "Darko",
  lastName: "Hristovski",
  description:"A passionate web developer with expertise in front-end and back-end technologies.",
  about:"I'm a passionate junior web developer specializing in React and the MERN (MongoDB, Express.js, React.js, Node.js) stack. With a strong foundation in front-end development and a knack for creating intuitive user interfaces, I strive to build engaging web applications that not only look great but also provide seamless user experiences.",
  email: "hristovski15@gmail.com",
  stacks: [
    {
      id:1,
      img:'../../assets/frontend.svg',
      name: "Front-End Development",
      languages: ["HTML","CSS3","JavaScript", "React"],
      tools: ["Bootstrap", "Tailwind"],
    },
    {
      id:2,
      img:'/src/assets/backend.svg',
      name: "Back-End Development",
      languages: ["Node.JS", "NoSQL", "SQL"],
      tools: ["Express", "PostgreSQL", "Mongo DB",  "GitHub", "Netfliy"],
    },
    {
      id:3,
      img:'/src/assets/trello.svg',
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

const About = () =>{
 
    return(       
        <section id='about' className="section section-padding text-center">
          <div className="container"> 
           <h2>About me</h2>
            <p>{developer.about}</p>
           
            <div className="about-stack">
                {developer.stacks.map(x=>{
              return(  
                <div key={x.id} className="card">
                <div className='card-top'>
                <img src={frontend} alt="" />
                 <div className="img-wrapper">
                   <img src={x.img} alt="logo" />
                 </div>
                <h4><p>{x.name}</p></h4>
                </div>
                <div className='card-middle'>
                <h5>Languages</h5>
                  <ul>
                 {x.languages.map((y,index)=>{
                  return(
                   <li key={y}><span>{y}{index<y.length-1 ? ',' : ''}</span></li>
                  )
                 })}
                 </ul>
                </div>
                <div className="card-bottom">
                  <h5>Tools i use</h5>
                  <ul>
                 {x.tools.map((y,index)=>{
                  return(
                   <li key={x}><span>{y}{index<y.length-1 ? ',' : ''}</span></li>
                  )
                 })}
                 </ul>
                </div>
                </div>
              )
                })}
            </div>
            
            
            </div>

        </section>
    )
}

export default About;