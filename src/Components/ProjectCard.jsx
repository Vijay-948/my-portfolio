import React from 'react';
import ProjectData from './ProjectData';
import { Tilt } from 'react-tilt';
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';


const ProjectCard = () => {
    return (
        <section id='projects' className="relative py-8 px-4 lg:px-16 -z-1 mt-10">
            <div className="text-center">
                <p className="text-xl font-semibold">Browse My Recent</p>
                <h1 className='text-4xl font-semibold mt-3'>Projects</h1>
                <p className='text-center mt-8'>
                    Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-8">
                {ProjectData.map((project, index) => (
                    <Tilt options={{
                        max: 45,
                        scale: 1,
                        speed: 450,
                      }}
                      className="bg-tertiary p-5 rounded-2xl sm:w-[470px] lg:w-[470px] w-full">
                        <div className="bg-gray-100 rounded-xl shadow-xl p-6 Tilt-inner transform transistion duration-500 hover:scale-105">
                            <div className="flex flex-col items-center">
                                <h4 className='text-xl font-semibold m-2'>{project.name}</h4>
                                <img src={project.image} alt={`Project $(index + 1)`} className='w-11/12 h-70 object-cover rounded-2xl mb-4 shadow-2xl' />
                                <p className='text-gray-400 mb-1 p-2'>{project.description}</p>
                                <div className="flex justify-start mb-4 text-start">
                                    {project.technologies.map((techStack, indx) => (
                                        <span key={indx} className={`text${techStack.color}-600 mx-1`}>#{techStack.name}</span>
                                    ))}
                                </div>
                                <div className='flex flex-row gap-8'>
                                    <a className='bg-blue-900 text-white px-2 py-1 rounded-3xl inline-block mb-4 text-decoration no-underline' href={project.soruce_code_link}>
                                        Code <GitHubIcon sx={{width: '20px', height:'20px', color: 'white'}}/>
                                    </a>
                                    <a className='bg-blue-900 text-white px-2 py-1 rounded-3xl inline-block mb-4 no-underline' href={project.soruce_code_link}>
                                        Demo <OpenInNewIcon sx={{width: '20px', height:'30px', color: 'white', textDecoration: 'none'}}/>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </Tilt>
                ))}

            </div>

        </section>
    )
}

export default ProjectCard;