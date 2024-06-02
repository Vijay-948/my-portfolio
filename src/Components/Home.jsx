import About from "./About";
import CodingProfiles from "./CodingProfiles";
import Contact from "./Contact";
import Navbar from "./Navbar";
import Profile from "./Profile";
import ProjectCard from "./ProjectCard";
import Skills from "./Skills";


const Home = () => {

    return(
        <>
        <Navbar />
        <Profile  /> 
        <About />   
        <ProjectCard element={'#projects'} /> 
        <Skills /> 
        <CodingProfiles />  
        <Contact />
            
        {/* <CodingProfiles /> */}
        {/* <Contact /> */}
            {/* <Project /> */}
            {/* <ProjectCard /> */}
         {/* <Work /> */}
        </>
    )
    
}

export default Home;