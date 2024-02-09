
import './about.css'

const About = ({data}) =>{
  {console.log(data)}
    return(       
        <section className="section section-padding text-center">
          <div className="container"> 
           <h2>About</h2>
            <p>{data.about}</p>
            <div className="about-stack">
                {data.stacks.map(x=>{
              return(  
                <div key={x.id} className="card">
                <div className='card-top'>
                 <div className="img-wrapper">
                   <img src={x.img} alt="logo" />
                 </div>
                <h4><p>{x.name}</p></h4>
                </div>
                <div className='card-middle'>
                <h5>Languages</h5>
                  <ul>
                 {x.languages.map(y=>{
                  return(
                   <li>{y}</li>
                  )
                 }).reduce((prev, curr) => [prev,',',curr])}
                 </ul>
                </div>
                <div className="card-bottom">
                  <h5>Tools i use</h5>
                  <ul>
                 {x.tools.map(y=>{
                  return(
                   <li>{y}</li>
                  )
                 }).reduce((prev, curr) => [prev, ',' ,curr])}
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