import StackTag from "./StackTag"
import GitHubButton from "./GithubButton"
import PlayButton from "./PlayButton"

/* eslint-disable react/prop-types */
const ProjectCard = ({project}) => {
  return (
    <div className="relative mx-9 my-4 rounded-2xl flex flex-row bg-forest min-h-full bg-auto">
    <img
      className="hidden rounded-l-2xl lg:block mr-2 w-96"
      width="250"
      src={project.imageLink}
      alt=""
      onClick={project.github}
    ></img>
    <div>
      <div className="font-semibold text-white px-5 lg:mr-3 text-2xl mt-4 pb-1 lg:pt-2 underline">
        {project.title}
      </div>
      <div className="font-medium text-white  px-5 lg:mr-3 max-w-2xl">
        {project.description}
      </div>
      <div className="mt-4 ml-4">
        {(project.stack).map((technology) => (
          <StackTag key={technology} tagText={technology}></StackTag>
        
        ))}
      </div>
      <div>
        <GitHubButton link={project.github}></GitHubButton>
      </div>
      <div>
        {project.title == "Castle and Conquer" ? <PlayButton gameLink={project.gameLink}></PlayButton> : ''}
      </div>
      
    </div>
  </div>
  )
}

export default ProjectCard