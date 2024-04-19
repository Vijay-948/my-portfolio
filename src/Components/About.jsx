import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../Styles/About.css';
import "react-vertical-timeline-component/style.min.css";
import  ptg  from '../Assests/favicon.png';
import epam from '../Assests/epam-icon.png';
import degree from '../Assests/degree-icon.png';


const About = () => {
    return(
        <section id='about'>
            <VerticalTimeline className='index'>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#e6e6e5", color: "black" }}
                contentArrowStyle={{ borderRight: "20px solid  rgb(33, 150, 243)" }}
                date="Sept 2023 - Present"
                // iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                // icon={WorkIcon}
                iconStyle={{ backgroundImage: `url(${ptg})`, backgroundSize: 'cover', color: 'red', backgroundRepeat: 'no-repeat' }}
              >
                <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                <h4 className="vertical-timeline-element-subtitle">People Tech Group, Hyderabad, India</h4>
                <p>
                  <ul>
                  <li style={{textAlign: 'left' }}> Developing and maintaining web applications using React.js, Spring Boot, PostgressSQL and other related technologies.</li>
                  <li style={{textAlign: 'left' }}> Collaborated with the team to ensure seamless integration of front-end and back-end functionalities and deploying.</li>
                  <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                  </ul>
                  <strong>
                    Technologies Used:
                  </strong>
                  <ul>
                    <li>React.js</li>
                    <li>Spring boot</li>
                    <li>Java</li>
                    <li>TypeScript</li>
                    <li>Ionic for mobile Application</li>
                    <li>PostgressSQL</li>
                  </ul>
                </p> 
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#e6e6e5", color: "black" }}
                contentArrowStyle={{ borderRight: "20px solid  rgb(33, 150, 243)" }}
                date="Jan 2023 - May  2023"
                iconStyle={{ backgroundImage: `url(${epam})`, backgroundSize: 'cover', color: 'red' }}
              >
                <h3 className="vertical-timeline-element-title">Java Developer Trainee</h3>
                <h4 className="vertical-timeline-element-subtitle">EPAM</h4>
                <p>
                  <ul>
                    <li style={{textAlign: 'left' }}>Gained hands-on experience in Backend Development using Java</li>
                    <li style={{textAlign: 'left' }}>Engaged in continuous learning through training sessions, and practical assignments to enhance technical proficiency.</li>     
                  </ul>
                  <strong>
                    Technologies Learnt:
                  </strong>
                  <ul>
                    <li>Spring boot</li>
                    <li>Java</li>
                    <li>Git</li>
                  </ul>
                </p> 
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "#e6e6e5", color: "black" }}
                contentArrowStyle={{ borderRight: "20px solid  rgb(33, 150, 243)" }}
                date="July 2019 - May 2023"
                iconStyle={{ backgroundImage: `url(${degree})`, backgroundSize: 'cover', color: 'red' }}
              >
                <h3 className="vertical-timeline-element-title">B.Tech Computer Science & Engineering</h3>
                <h4 className="vertical-timeline-element-subtitle">Lovely Professional University, Punjab, India</h4>
                <p>
                <strong>
                      Technologies and Coursework
                </strong>
                <ul>
                  <li>Java</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Databse Management System</li>
                  <li>Computer Networks</li>
                </ul>        
                </p> 
              </VerticalTimelineElement>
            </VerticalTimeline>
            
            
        </section>
    )

}

export default About;