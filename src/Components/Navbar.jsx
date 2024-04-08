import { useState } from 'react';
import '../Styles/Navbar.css';

function Navbar () {

    const [openMenu, setOpenMenu] = useState(false);

    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    }
    

    return(
        <>
         <div className='position'>
            <nav id='desktop-nav'>
                <div className="name">Kogilathota Vijay Reddy</div>
                <div>
                    <ul className="nav-links">
                        <li><a href="about">About</a></li>
                        <li><a href="about">Skills</a></li>
                        <li><a href="about">Projects</a></li>
                        <li><a href="about">Coding Profiles</a></li>
                        <li><a href="about">Contact</a></li>
                    </ul>
                </div>
            </nav>
         </div>

         <div>
            <nav id="hamburger-nav">
                <div className="name">Vijay Reddy</div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className={`menu-links ${openMenu ? 'open' : ''}`} >
                        <li><a href="#about" onClick={toggleMenu}>About</a></li>
                        <li><a href="#skills" onClick={toggleMenu}>Skills</a></li>
                        <li><a href="#projects" onClick={toggleMenu}>Projects</a></li>
                        <li><a href="#coding-profiles" onClick={toggleMenu}>Coding Profiles</a></li>
                        <li><a href="#Contact" onClick={toggleMenu}>Contact</a></li>
                    </div>
                </div>
            </nav>
         </div>
        </>

    );

}

export default Navbar;