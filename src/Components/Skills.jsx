import React from 'react';
import react from '../Assests/reactjs.png';
import java from '../Assests/Java.png';
import javascript from '../Assests/JS.png';
import typescript from '../Assests/TS.png';
import html from '../Assests/html.png';
import css from '../Assests/css.png';
import springboot from '../Assests/Spring boot.png';
import sql from '../Assests/mysql.png';
import git from '../Assests/git.png';
import tailwind from '../Assests/tailwind.png';
  

const Skills = () => {
    const languageandTools = [
        { name: 'Java', logo: java },
        { name: 'JavaScript', logo: javascript },
        { name: 'TypeScript', logo: typescript },
        { name: 'React', logo: react },
        { name: 'Spring Boot', logo: springboot },
        { name: 'Git', logo: git },
        { name: 'HTML', logo: html },
        { name: 'CSS', logo: css },
        { name: 'MySQL', logo: sql },
        {name: 'TailwindCSS', logo:tailwind }
    ];

    return (
       
        <section id="skills" className="py-10 px-5 md:px-20 min-h-screen flex flex-col items-center bg-gray-600">
            <p className="font-poppins font-bold text-xl text-white">Explore My</p>
            <h1 className="font-poppins font-medium text-4xl mt-2 mb-10 text-white">Skills</h1>
            <div className="grid grid-cols-3 md:grid-cols-7 gap-16">
                {languageandTools.map((item) => (
                    <div className="text-center">
                        <img className= "rounded-full w-24 mx-auto mb-2  transform transition-transform hover:scale-105 hover:shadow-2xl hover:bg-gray-700" src={item.logo} alt={item.name} />
                        <p className="font-poppins font-semibold text-white">{item.name}</p>
                    </div>
                ))}
            </div>
        </section>
       
    );
}

export default Skills;
