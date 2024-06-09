import projectImg1 from '../Assests/ProjectCardImages/Car-Rental.jpg';
import projectImg2 from '../Assests/ProjectCardImages/image.png';
import projectImg3 from '../Assests/ProjectCardImages/project3.png'
import projectImg4 from '../Assests/ProjectCardImages/project-4.png';

const ProjectData = [
    {
        name: "Full Stack Project",
        description: "Developed a secure e-commerce platform with React, Spring Boot, Java, and MySQL, featuring OTP-based email verification. Integrated Spring Security for robust authentication and authorization. Deployed the application on AWS for scalable and reliable performance.",
        technologies: [
            { name: "React", color: "blue" },
            { name: "Tailwindcss", color: "green" },
            { name: "Spring Boot", color: "green" },    
            {name: "MySQL", color: "blue"}
        ],
        image: projectImg2,
        soruce_code_link: "https://github.com/Vijay-948/forntend-ui",
        live_website_link: "https://github.com/Vijay-948/forntend-ui"
    },
    {
        name: "Frontend Project",
        description: "A car rental project using React, CSS, and TypeScript enables users to browse and book rental cars online. The application features a dynamic, responsive UI and integrates with mock APIs for real-time data updates. Built with TypeScript, the project ensures robust type-checking and maintainability.",
        technologies: [
            { name: "TypeScript ", color: "blue" },
            { name: "React", color: "blue" },
            { name: "CSS", color: "green" },
           
        ],
        image: projectImg1,
        soruce_code_link: "https://github.com/Vijay-948/Car-Rental-UI",
        live_website_link: "https://vijay-car-rental.netlify.app/"
    },
    {
        name: "Backend",
        description: "Spring Boot involves defining entities like Users. Use Spring Data JPA to create repositories for CRUD operations and implement REST APIs for database interactions. Integrate Spring Security with JWT tokens and email verification for robust authentication and authorization for api using swagger-ui.",
        technologies: [
            { name: "Java", color: "green"},
            { name: "Springboot", color: "green" },
        
            {name: "Jwt", color:'red'},
            {name: "MySQL", color: "blue"}
        ],
        image: projectImg3,
        soruce_code_link: "https://github.com/Vijay-948/backend-api",
        live_website_link: "https://github.com/Vijay-948/backend-api"
    },
    {
        name: "Backend",
        description: "A Transaction Management System in Spring Boot involves defining entities like Users and Transactions. Use Spring Data JPA to create repositories for CRUD operations. Implement REST APIs to interact with a MySQL database for managing transactions with basic Authentication.",
        technologies: [
            { name: "Java", color: "blue" },
            { name: "Spring-boot", color: "green" },
            
            {name: "MySQL", color: "blue"}
        ],
        image: projectImg4,
        soruce_code_link: "https://github.com/Vijay-948/Transaction-Management-System",
        live_website_link: "https://github.com/Vijay-948/Transaction-Management-System"
    }
]

export default ProjectData;