import React from 'react';
import ProfilePic from '../Assests/ProfileImg.png';
import linkedin from '../Assests/linkedin.png';
import GitHubIcon from '@mui/icons-material/GitHub';
import { Tilt } from 'react-tilt';


const Profile = () => {
    
    return (
        <section id="profile" className='bg-gray-600 flex flex-col items-center text-white justify-center py-20 lg:flex-row lg:gap-32 lg:h-screen'>
            <Tilt  options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                    }}
            >
                <div className="flex">
                    <img src={ProfilePic} alt='profile' className='w-80 h-80 lg:w-96 lg:h-96 rounded-full animate-profile shadow-2xl' />
                </div>
            </Tilt>

            <div className="text-center lg:text-center lg:self-center text-white mt-10">
                <p className="text-xl font-bold text-center">Hello I'm &#128075;</p>
                <p className='text-3xl lg:text-5xl font-bold text-center font-light lg:font-bold'>Kogilathota Vijay Reddy</p>
                <p className='text-2xl font-bold mt-2 text-center'>Full Stack Developer</p>

                <div className='flex justify-center mt-4 gap-6'>
                    <button className='px-2 py-2 bg-gray-400 rounded-3xl font-bold transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700'
                        onClick={() => window.open('../assests/vijayreddy.pdf')}
                    >
                        Download CV
                    </button>
                    <button className='px-2 py-2 bg-gray-400 rounded-3xl font-bold transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700'
                        onClick={() => (window.location.href= './#contact')}
                    >
                        Contact Info
                    </button>
                </div>
                
                <div className="flex justify-center lg:justify-center mt-8 gap-4">
                    <a href='https://www.linkedin.com/in/kogilathota-vijay-reddy-062224193/'><img src={linkedin} alt='Linkedin Profile' className='w-8 h-8 ' /></a>
                    <a href='https://github.com/Vijay-948'><GitHubIcon  sx={{color:'white'}}/></a>
                </div>
            </div>

        </section>
        
    )
}

export default Profile;