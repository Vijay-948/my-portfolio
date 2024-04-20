import  ProfilePic  from '../Assests/ProfileImg.png';
import linkedin from '../Assests/linkedin.png';
import github from '../Assests/github.png'
import '../Styles/Profile.css';

const Profile = () => {
    return(
        <section id="profile">
        <div className="profile_pic">
            <img className="profile-pic-rotate" src={ProfilePic}  alt='profile img'/>
        </div>

        <div className="section__text">
            <p className="section__text__p1">Hello I'm</p>
            <p className="title">Kogilathota Vijay Reddy</p>
            <p class="section__text__p2">Full Stack Developer</p>
            <div className="btn-container">
                <button className="btn btn-color-2" onclick="window.open('./assests/Vijay Reddy .pdf')">Download CV</button>
                <button className="btn btn-color-1" onclick="location.href='./#contact'">Contact Info</button>
            </div>
            <div id="socials-container">
                <img src={linkedin}
                 alt="My LinkedIn profile"
                className="icon" 
                onclick="location.href='https://www.linkedin.com/in/kogilathota-vijay-reddy-062224193/'"/>
                <img src={github}
                 alt="My Github profile"
                className="icon" 
                onclick="location.href='https://github.com/Vijay-948'"/>
            </div>

        </div>


       </section>
        
    )

}

export default Profile;