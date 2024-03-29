import { motion } from "framer-motion";
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
      img:'https://res.cloudinary.com/dute4bfhz/image/upload/v1708380569/frontend_jmyrwu.svg',
      name: "Front-End Development",
      languages: ["HTML","CSS3","JavaScript", "React"],
      tools: ["Bootstrap", "Tailwind"],
    },
    {
      id:2,
      img:'https://res.cloudinary.com/dute4bfhz/image/upload/v1708380579/backend_cwxuyr.svg',
      name: "Back-End Development",
      languages: ["Node.JS", "NoSQL", "SQL"],
      tools: ["Express", "PostgreSQL", "Mongo DB",  "GitHub", "Netfliy"],
    },
    {
      id:3,
      img:'https://res.cloudinary.com/dute4bfhz/image/upload/v1708380589/trello_org5ad.svg',
      name: "Practices",
      languages: ["Agile", "SCRUM"],
      tools: ["Trello", "Slack", "Discord"],
    },
  ],
 
};



const About = () =>{
  const fadInAboutTitle = {
    initial: {
      opacity: 0,
      translateY:50,
      translateX:0,
    },
    animate: {
      opacity: 1,
      translateY:0,
      translateX:0,
    },
  };

  const fadInAboutCards = {
    initial: {
      opacity: 0,
      translateY:100,
      translateX:0,
    },
    animate: {
      opacity: 1,
      translateY:0,
      translateX:0,
    },
  };
 
    return(       
        <section id='about' className="about-section section section-padding text-center">
          <div className="container"> 

          <motion.div
           variants={fadInAboutTitle}
           initial="initial"
           whileInView="animate"
           viewport={{ once: true }}
           transition={{ duration:0.3, delay:0.2 }}
           className="about-title"
          >
           <h2>About me</h2>
            <p>{developer.about}</p>
            </motion.div>

            <div className="about-stack">
                {developer.stacks.map((x,index)=>{
              return(  
                <motion.div
                variants={fadInAboutCards}
                initial="initial"
                whileInView="animate"
                transition={{ duration:0.3, delay: index * 0.5 }}
                viewport={{ once: true}}
               
                key={x.id} className="card">
                <div className='card-top'>
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
                   <li key={index}><span>{y}{index<y.length-1 ? ',' : ''}</span></li>
                  )
                 })}
                 </ul>
                </div>
                <div className="card-bottom">
                  <h5>Tools i use</h5>
                  <ul>
                 {x.tools.map((y,index)=>{
                  return(
                   <li key={index}><span>{y}{index<y.length-1 ? ',' : ''}</span></li>
                  )
                 })}
                 </ul>
                </div>
                </motion.div>
              )
                })}
            </div>
            
            
            </div>

        </section>
    )
}

export default About;