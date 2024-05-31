import { useState } from 'react';
import { ProjectDetails} from '../Components/ProjectData'

const ProjectCard = ({ name, description, technologies, image, source_code_link, live_website_link }) => {
    
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="bg-gray-red">
            red

        </div>
    );

}

export default ProjectCard;