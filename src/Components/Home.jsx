import About from "./About";
import CodingProfiles from "./CodingProfiles";
import Navbar from "./Navbar";
import Profile from "./Profile";
import Skills from "./Skills";


const Home = () => {

    return(
        <>
        <Navbar />
        <Profile /> 
        <About />   
        <Skills />    
        <CodingProfiles />
        </>
    )
    
}

export default Home;