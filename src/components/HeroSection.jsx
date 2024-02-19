import IconSlider from "./IconSlider"
import profilePic from '../assets/profilePic.jpeg'

const HeroSection = ({data}) =>{
    return(
        <section className="hero-section section">
          <div className="flex direction-column container">
          <div className="hero-section-image flex flex-center hero-img">
          <div className="hero-section-img-wrapper">
          <img src={profilePic} alt="profile-image" />
          </div>
          </div>
          <div className="hero-section-text flex flex-center">
            <div className="hero-section-text-content">
            <h1>{data.name}<span> {data.lastName}</span></h1>
            <h3>{data.description}</h3>
            </div>
          </div>
          </div>
          <IconSlider/>
        </section>
    )

}

export default HeroSection