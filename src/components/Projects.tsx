
import { ProjectInfo } from "../User";
import ProjectCard from "./ProjectCard";


const Projects=() => {
    return (
        <div className="px-16 mx-20 my-10 font-mono" >
            <h1 className="text-4xl text-center mb-5 font-bold text-white " ><span className="text-primaryColor">02.&nbsp;</span>Projects</h1>
            <div>
                <div className="flex flex-wrap justify-between gap-4" >
                    {
                        ProjectInfo.map((project: any, index: number)=><ProjectCard key={index} title={project.title} desc={project.desc} image={project.image} live={project.live} link={project.link} github={project.github} technologies={project.technologies} />)
                    }
                </div>
            </div>
        </div>
    )
};
export default Projects;