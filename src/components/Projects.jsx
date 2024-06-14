import projectList from "./data/projectList"
import ProjectCard from "./ProjectCard"

const Projects = () => {
  return (
    <div className="pb-12 relative flex flex-col min-h-min  text-left bg-vanilla" id="projects">
        <div className="text-3xl font-bold mt-6 md:mt-10 mb-4 mx-4 ml-32 mr-16 text-left underline text-lettering">My Latest Projects</div>
    
        <div className="pl-16 ml-6">
            {projectList.map((project) => (
            <ProjectCard key={project.github} project={project}></ProjectCard>
        ))}
        </div>

    </div>

    
  )
}

export default Projects