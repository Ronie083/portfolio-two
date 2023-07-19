import ProjectsCards from "../../../Components/ProjectsCard/ProjectsCards";
import projectsData from "./ProjectsData";

const Projects = () => {
    return (
        <div className="my-32 p-16 px-2" id="projects">
            <h1 className="text-center text-4xl">My projects</h1>
            <hr />
            <div className="flex flex-col md:flex-row max-w-7xl justify-between mx-auto">
                {projectsData.map((projectData, index) => (
                    <ProjectsCards
                        key={index}
                        title={projectData.title}
                        image={projectData.image}
                        features={projectData.features}
                        technologies={projectData.technologies}
                        live={projectData.live}
                        code={projectData.code}
                    />
                ))}
            </div>
        </div>
    );
};

export default Projects;
