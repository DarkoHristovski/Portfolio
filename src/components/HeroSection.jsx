import IconSlider from "./IconSlider"
import profilePic from '../assets/profilePic.jpeg'

const HeroSection = ({data}) =>{
    return(
        <section className="hero-section">
          <div className="flex">
          <div className="hero-section-text flex flex-center">
            <div className="hero-section-text-content">
            <h1>Im {data.name}<span> {data.lastName}</span></h1>
            <h3>{data.about}</h3>
            </div>
          </div>
          <div className="hero-section-image flex flex-center hero-img">
          <div className="hero-section-img-wrapper">
          <img src={profilePic} alt="profile-image" />
          </div>
          </div>
          </div>
          <IconSlider/>
        </section>
    )

}

export default HeroSection