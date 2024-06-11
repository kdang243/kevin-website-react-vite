import ExperienceCard from "./ExperienceCard"
import experience_list from "./data/experienceList"

const Experience = () => {
  return (
    <div className="pb-12 relative flex flex-col min-h-min  text-left bg-white -mt-12" id="experience">
        <div className="text-3xl font-bold mt-6 md:mt-10 mb-4 mx-4 ml-32 mr-16 text-left underline">Experience</div>
        
        <div className="pl-16 ml-6">
            {experience_list.map((experience) => (
            <ExperienceCard key={experience.github} experience={experience}></ExperienceCard>
        ))}
        </div>
        
        
    </div>
  )
}

export default Experience