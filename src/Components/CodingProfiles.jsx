import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import github from '../Assests/github.png';
import leetcode from '../Assests/leetcode.png';
import geeksforgeeks from '../Assests/GeeksforGeeks.png';

import '../Styles/CodingProfiles.css'
import { Link } from 'react-router-dom';
// import { Link } from '@mui/icons-material';

const CodingProfiles = () => {

    return (
        <section id='coding-profile'>
            <p class="section__text__p1">Problem Solving</p>
            <h1 class="title">Coding</h1>
            {}
            {}
            <VerticalTimeline  className="index" lineColor='none'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'green', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ backgroundImage: `url(${github})`, backgroundSize: 'cover', color: 'red' }}
                >
                    <h3 className="vertical-timeline-element-title">Github</h3>
                    <p>Daily involvement in GitHub encompasses creating, updating, and maintaining project repositories, encompassing tasks like coding, debugging, testing.</p>
                    <p><a href="https://github.com/Vijay-948">View Profile</a></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ backgroundImage: `url(${leetcode})`, backgroundSize: '70px', backgroundRepeat: 'no-repeat', color: 'red' }}
                >
                    <h3 className="vertical-timeline-element-title">Leetcode</h3>
                    <p>Consistently tackle coding challenges on LeetCode, solving problems daily and earning achievements like the coveted 100 Days badge through persistent problem-solving efforts.</p>
                    <p><a href="https://leetcode.com/vijay_948/">View Profile</a></p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
                    contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                    iconStyle={{ backgroundImage: `url(${geeksforgeeks})`, backgroundSize: '90px', backgroundRepeat:'no-repeat', color: 'red' }}
                >
                    <h3 className="vertical-timeline-element-title">GeeksforGeeks</h3>
                    <p></p>
                    <p><a href="https://www.geeksforgeeks.org/user/vijay948/">View Profile</a></p>
                </VerticalTimelineElement>
            </VerticalTimeline>

        </section>
    )

}

export default CodingProfiles;