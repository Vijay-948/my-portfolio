import React from 'react';
import ProfilePic from '../Assests/ProfileImg.png';
import linkedin from '../Assests/linkedin.png';
import GitHubIcon from '@mui/icons-material/GitHub';


const Profile = () => {
    
    return (
        <section id="profile" className='bg-gray-900 flex flex-col items-center text-white justify-center py-20 lg:flex-row lg:gap-32 lg:h-screen'>
            <div className="flex">
                <img src={ProfilePic} alt='profile' className='w-80 h-80 lg:w-96 lg:h-96 rounded-full animate-profile shadow-2xl' />
            </div>

            <div className="text-center lg:text-center lg:self-center text-white mt-10">
                <p className="text-xl font-semibold text-center">Hello I'm &#128512;</p>
                <p className='text-3xl lg:text-5xl font-bold text-center font-light lg:font-bold'>Kogilathota Vijay Reddy</p>
                <p className='text-2xl font-bold mt-2 text-center'>Full Stack Developer</p>

                <div className='flex justify-center mt-4 gap-6'>
                    <button className='px-2 py-2 bg-gray-400 rounded-3xl hover:bg-gray-700 shadow-xl font-bold'
                        onClick={() => window.open('../assests/vijayreddy.pdf')}
                    >
                        Download CV
                    </button>
                    <button className='px-2 py-2 bg-gray-400 rounded-3xl hover:bg-gray-700 shadow-2xl font-bold'
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