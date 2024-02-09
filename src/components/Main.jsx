import {useState} from 'react';
import HeroSection from "./HeroSection";
import developer from "../userProfil";

const Main = () =>{
    const[data] = useState(developer)
    return(
        <main>
        <HeroSection data={data}/>
        </main>
    )
}

export default Main