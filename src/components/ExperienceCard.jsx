/* eslint-disable react/prop-types */
import StackTag from "./StackTag"
import GitHubButton from "./CompanyWebsiteButtion"


const ExperienceCard = ( {experience} ) => {
  return (
    <div className="relative mx-9 my-4 rounded-2xl flex flex-row bg-forest min-h-full bg-auto">
    <img
      className="hidden rounded-l-2xl lg:block mr-2 w-96"
      width="250"
      src={experience.imageLink}
      alt=""
      onClick={experience.github}
    ></img>
    <div>
      <div className="font-semibold text-white px-5 lg:mr-3 text-2xl mt-4 pb-1 lg:pt-2 underline">
        {experience.title}
      </div>
      <div className="font-semibold text-white px-5 lg:mr-3 max-w-2xl mb-2 mt-2">
        {experience.date}
      </div>
      <div className="font-medium text-white  px-5 lg:mr-3 max-w-2xl">
        {experience.description}
      </div>
      <div className="mt-4 ml-4">
        {(experience.stack).map((technology) => (
          <StackTag key={technology} tagText={technology}></StackTag>
        ))}
      </div>
      <GitHubButton link={experience.github}></GitHubButton>
    </div>
  </div>
  )
}

export default ExperienceCard