import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import github from '../Assests/github.png';
// import GitHubIcon from '@mui/icons-material/GitHub';
import leetcode from '../Assests/leetcode.png';
import geeksforgeeks from '../Assests/GeeksforGeeks.png';
import LaunchIcon from '@mui/icons-material/Launch'; 

const CodingProfiles = () => {
    return (
        <section id='coding' className="py-20 px-10 md:px-40 min-h-screen flex flex-col items-center color-white bg-gray-600 -mt-40">
            <p className="font-poppins text-lg mb-2 text-white">Problem Solving</p>
            <h1 className="font-poppins font-medium text-4xl mb-10 text-white">Coding</h1>
            <VerticalTimeline className="w-full" lineColor='none'>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e6e6e5', color: 'black' }}
                    contentArrowStyle={{ borderRight: '15px solid  gray' }}
                    iconStyle={{ backgroundImage: `url(${github})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', color: 'black', backgroundColor: 'white'}}
                >
                    <h3 className="vertical-timeline-element-title font-poppins font-semibold text-xl">Github</h3>
                    <p className="font-poppins text-base">Daily involvement in GitHub encompasses creating, updating, and maintaining project repositories, encompassing tasks like coding, debugging, testing.</p>
                    <p className="link-tag text-right">
                        <a href="https://github.com/Vijay-948/" className="text-white hover:text-red-600 hover:bg-gray-300 items-center gap-1 bg-gray-900 md:px-2 md:py-2 rounded-full">
                            View Profile <LaunchIcon className='ml-1' sx={{ width: '15px', height: '15px', color: 'white' }} />
                        </a>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e6e6e5', color: 'black' }}
                    contentArrowStyle={{ borderRight: '15px solid  gray' }}
                    iconStyle={{ backgroundImage: `url(${leetcode})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display:'flex', justifyContent: 'center',alignItems: 'center', backgroundColor: 'white'}}
                >
                    <h3 className="vertical-timeline-element-title font-poppins font-semibold text-xl shadow:xl">Leetcode</h3>
                    <p className="font-poppins text-base">Consistently tackle coding challenges on LeetCode, solving problems daily and earning achievements like the coveted 100 Days badge through persistent problem-solving efforts.</p>
                    <p className="link-tag text-right">
                        <a href="https://leetcode.com/u/vijay_948/" className="text-white hover:text-red-600 hover:bg-gray-300 items-center gap-1 bg-gray-900 md:px-2 md:py-2 rounded-full ">
                            View Profile <LaunchIcon sx={{ width: '15px', height: '15px', color: 'white' }} />
                        </a>
                    </p>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                    className="vertical-timeline-element--work"
                    contentStyle={{ background: '#e6e6e5', color: 'black' }}
                    contentArrowStyle={{ borderRight: '15px solid  gray' }}
                    iconStyle={{ backgroundImage: `url(${geeksforgeeks})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat', display:'flex', justifyContent: 'center',alignItems: 'center',justifySelf: 'center' }}
                >
                    <h3 className="vertical-timeline-element-title font-poppins font-semibold text-xl">GeeksforGeeks</h3>
                    <p className="font-poppins text-base">Consistently tackle coding challenges on GeeksforGeeks, solving problems daily and earning achievements like the coveted 100 Days badge through persistent problem-solving efforts.</p>
                    <p className="link-tag text-right" style={{textAlign: 'right'}}>
                        <a href="https://www.geeksforgeeks.org/user/vijay948/" className="text-white hover:text-red-600 hover:bg-gray-300 items-center gap-1 bg-gray-900 md:px-2 md:py-2 rounded-full " style={{textAlign:'right'}}>
                            View Profile <LaunchIcon sx={{ width: '15px', height: '15px', color: 'white' }}  />
                        </a>
                    </p>
                </VerticalTimelineElement>
            </VerticalTimeline>
        </section>
    )
}

export default CodingProfiles;
