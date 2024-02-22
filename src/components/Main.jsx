import {useState} from 'react';
import HeroSection from "./HeroSection";
import About from "./About/About";
import developer from "../userProfil";
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

const Main = () =>{
    const[data] = useState(developer)
    return(
        <>
       
        <HeroSection data={data}/>
        <About data={data}/>
        <Projects/>
         <Contact/>
        
        </>
    )
}

export default Main