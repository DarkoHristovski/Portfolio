import {useState} from 'react';
import HeroSection from "./HeroSection";
import About from "./About/About";
import developer from "../userProfil";

const Main = () =>{
    const[data] = useState(developer)
    return(
        <main>
        <HeroSection data={data}/>
        <About data={data}/>
        </main>
    )
}

export default Main