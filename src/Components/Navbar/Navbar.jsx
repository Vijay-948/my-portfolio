import '../../Styles/Navbar.css';

function Navbar () {
    

    return(
        <>
         <div>
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
                <div className="name">Kogilathota Vijay Reddy</div>
                <div className="hamburger-menu">
                    <div className="hamburger-icon">
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                    <div className="menu-links">
                        <li><a href="#about">About</a></li>
                        <li><a href="#skills">Skills</a></li>
                        <li><a href="#projects">Projects</a></li>
                        <li><a href="#coding-profiles">Coding Profiles</a></li>
                        <li><a href="#Contact">Contact</a></li>
                    </div>
                </div>
            </nav>
         </div>
        </>

    );

}

export default Navbar;