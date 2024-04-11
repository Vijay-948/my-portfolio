import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import '../Styles/About.css';
import "react-vertical-timeline-component/style.min.css";
import  WorkIcon  from '../Assests/github.png';


const About = () => {
    return(
        <section id='about'>
            <VerticalTimeline className='index'>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                date="2023 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                // icon={WorkIcon}
              >
                <img src={WorkIcon} alt="Work Icon" style={{width:"20px"}}/>
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project
                    Management, Team Leading
                </p> 
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                date="2023 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={WorkIcon}
              >
                <img src={WorkIcon} alt="Work Icon" style={{width:"20px"}}/>
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project
                    Management, Team Leading
                </p> 
              </VerticalTimelineElement>
              <VerticalTimelineElement
                className="vertical-timeline-element--work"
                contentStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
                date="2023 - present"
                iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
                icon={WorkIcon}
              >
                <img src={WorkIcon} alt="Work Icon" style={{width:"20px"}}/>
                <h3 className="vertical-timeline-element-title">Creative Director</h3>
                <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
                <p>
                    Creative Direction, User Experience, Visual Design, Project
                    Management, Team Leading
                </p> 
              </VerticalTimelineElement>

            
            </VerticalTimeline>
            
            
        </section>
    )

}

export default About;