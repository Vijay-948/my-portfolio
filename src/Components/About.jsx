import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import ptg from '../Assests/favicon.png';
import epam from '../Assests/epam-icon.png';
import degree from '../Assests/degree-icon.png';

const About = () => {
    return (
        <section id='about' className='bg-gray-600 py-30'>
            <VerticalTimeline className='index'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e6e6e5", color: "black" }}
                    contentArrowStyle={{ borderRight: "15px solid gray" }}
                    date="Sept 2023 - Present"
                    iconStyle={{ backgroundImage: `url(${ptg})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                >
                    <h3 className="vertical-timeline-element-title text-blue-600 text-xl font-semibold">Full Stack Developer</h3>
                    <h4 className="vertical-timeline-element-subtitle text-base">People Tech Group, Hyderabad, India</h4>
                    <p className="mt-4">
                        <ul className="list-disc ml-5 text-left">
                            <li>Developing and maintaining web applications using React.js, Spring Boot, PostgressSQL and other related technologies.</li>
                            <li>Collaborated with the team to ensure seamless integration of front-end and back-end functionalities and deploying.</li>
                            <li>Implementing responsive design and ensuring cross-browser compatibility.</li>
                        </ul>
                        <strong className="block mt-4">Technologies Used:</strong>
                        <ul className="list-disc ml-5 text-left">
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
                    contentArrowStyle={{ borderRight: "15px solid gray" }}
                    date="Jan 2023 - May 2023"
                    iconStyle={{ backgroundImage: `url(${epam})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                >
                    <h3 className="vertical-timeline-element-title text-blue-600 text-xl font-semibold">Java Developer Trainee</h3>
                    <h4 className="vertical-timeline-element-subtitle text-base">EPAM</h4>
                    <p className="mt-4">
                        <ul className="list-disc ml-5 text-left">
                            <li>Gained hands-on experience in Backend Development using Java</li>
                            <li>Engaged in continuous learning through training sessions, and practical assignments to enhance technical proficiency.</li>
                        </ul>
                        <strong className="block mt-4">Technologies Learnt:</strong>
                        <ul className="list-disc ml-5 text-left">
                            <li>Spring boot</li>
                            <li>Java</li>
                            <li>Git</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: "#e6e6e5", color: "black" }}
                    contentArrowStyle={{ borderRight: "15px solid gray" }}
                    date="July 2019 - May 2023"
                    iconStyle={{ backgroundImage: `url(${degree})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}
                >
                    <h3 className="vertical-timeline-element-title text-blue-600 text-xl font-semibold">B.Tech Computer Science & Engineering</h3>
                    <h4 className="vertical-timeline-element-subtitle text-base">Lovely Professional University, Punjab, India</h4>
                    <p className="mt-4">
                        <strong className="block">Technologies and Coursework:</strong>
                        <ul className="list-disc ml-5 text-left">
                            <li>Java</li>
                            <li>Data Structures & Algorithms</li>
                            <li>Database Management System</li>
                            <li>Computer Network</li>
                        </ul>
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    );
}

export default About;
