import React from 'react';
import ProjectData from './ProjectData';
import { Tilt } from 'react-tilt';

const ProjectCard = () => {
    return (
        <section className="relative py-8 px-4 lg:px-16">
            <div className="text-center">
                <p className="text-xl font-semibold">Browse My Recent</p>
                <h1 className='text-4xl font-semibold mt-3'>Projects</h1>
                <p className='text-center mt-8'>
                    Following projects showcase my skills and experience through real-world examples of my work. Each project is briefly described with links to code repositories and live demos. It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                </p>
            </div>
            <div className="grid grid-cols-1 md: grid-cols-2 lg:grid-cols-2 gap-8 mt-8">
                {ProjectData.map((project, index) => (
                    <Tilt>
                        <div className="bg-gray-100">
                            <div className="flex flex-col items-center">
                                <h4 className='text-xl font-semibold m-2'>{project.name}</h4>
                                <img src={project.image} alt={`Project $(index + 1)`} className='w-11/12 h-70 object-cover rounded-2xl mb-20' />
                            </div>
                        </div>
                    </Tilt>
                ))}

            </div>

        </section>
    )
}

export default ProjectCard;












// import React from 'react';
// import ProjectData from './ProjectData';
// import Tilt from 'react-tilt';

// const Projects = () => {
//     return (
//         <section id="projects" className="relative py-12 px-4 lg:px-16">
//             <div className="text-center mb-12">
//                 <p className="text-xl font-semibold">Browse My Recent</p>
//                 <h1 className="text-4xl font-bold">Projects</h1>
//             </div>
//             <div className="flex flex-wrap justify-center -mx-4">
//                 {ProjectData.slice(0, 2).map((project, index) => (
//                     <div key={index} className="w-full md:w-1/2 lg:w-1/2 p-4">
//                         <Tilt className="Tilt" options={{ max: 25, scale: 1.05 }}>
//                             <div className="bg-gray-100 rounded-lg shadow-md p-6 Tilt-inner transform transition duration-500 hover:scale-105">
//                                 <div className="flex flex-col items-center">
//                                     <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
//                                     <img src={project.image} alt={`Project ${index + 1}`} className="w-11/12 h-40 object-cover rounded-2xl mb-4" />
//                                     <p className="text-center text-gray-700 mb-4">{project.description}</p>
//                                     <div className="flex justify-center mb-4">
//                                         {project.technologies.map((tech, idx) => (
//                                             <span key={idx} className={`text-${tech.color}-600 mx-1`}>{tech.name}</span>
//                                         ))}
//                                     </div>
//                                     <button 
//                                         className="bg-blue-500 text-white px-4 py-2 rounded-md"
//                                         onClick={() => window.location.href = project.source_code_link}
//                                     >
//                                         GitHub
//                                     </button>
//                                 </div>
//                             </div>
//                         </Tilt>
//                     </div>
//                 ))}
//             </div>
//             <img src="./assets/arrow.png" alt="Arrow icon" className="w-12 h-12 mx-auto mt-8 cursor-pointer" onClick={() => window.location.href = '#contact'} />
//         </section>
//     );
// };

// export default Projects;





/*
const Projects = () => {
    return (
        <section id="projects" className="relative py-12">
            <div className="text-center">
                <p className="text-xl font-semibold">Browse My Recent</p>
                <h1 className="text-4xl font-bold">Projects</h1>
            </div>
            <div className="flex flex-wrap justify-center mt-8">
                {ProjectData.map((project, index) => (
                    <div key={index} className="w-full md:w-1/2 lg:w-1/3 p-4">
                        <div className="bg-gray-100 rounded-lg shadow-md p-6">
                            <div className="flex flex-col items-center">
                                <h4 className="text-xl font-semibold mb-2">{project.name}</h4>
                                <img src={project.image} alt={`Project ${index + 1}`} className="w-19/20 h-60   object-cover rounded-2xl mb-4" />
                                <p className="text-center text-gray-700 mb-4">{project.description}</p>
                                <div className="flex justify-center mb-4">
                                    {project.technologies.map((tech, idx) => (
                                        <span key={idx} className={`text-${tech.color}-600 mx-1`}>#{tech.name}</span>
                                    ))}
                                </div>
                                <button 
                                    className="bg-blue-500 text-white px-4 py-2 rounded-md"
                                    onClick={() => window.location.href = project.source_code_link}
                                >
                                    GitHub
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;

 */