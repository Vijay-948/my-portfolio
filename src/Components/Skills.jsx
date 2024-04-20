import react from '../Assests/reactjs.png';
import java from '../Assests/Java.png';
import javascript from '../Assests/JS.png';
import typescript from '../Assests/TS.png';
import html from '../Assests/html.png';
import css from '../Assests/css.png';
import springboot from '../Assests/Spring boot.png';
import sql from '../Assests/mysql.png';
import git from '../Assests/git.png';
import '../Styles/Skills.css'

const Skills = () => {

    const languageandTools = [
        { name: 'Java', logo: java },
        { name: 'JavaScript', logo: javascript },
        { name: 'TypeScript', logo: typescript },
        { name: 'React', logo: react },
        { name: 'Spring Boot', logo: springboot },
        {name: 'Git', logo: git},
        { name: 'HTML', logo: html },
        { name: 'CSS', logo: css },
        { name: 'MySQL', logo: sql }
    ];

    return(
        <section id='skills'>
            <p class="section__text__p1">Explore My</p>
            <h1 class="title">Skills</h1>
            <div className="skills__img__container">
                {languageandTools.map((item) =>(
                    <div className="skills__img">
                        <img className='skils' src={item.logo} alt={item.name}/>
                        <p className='skills_names'>{item.name}</p>
                    </div>

                ))}
            </div>
        </section>
    )

}

export default Skills;