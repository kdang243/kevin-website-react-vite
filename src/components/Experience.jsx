import ExperienceCard from "./ExperienceCard"
import experience_list from "./data/experienceList"

const Experience = () => {
  return (
    <div className=" relative flex flex-col min-h-min  text-left bg-vanilla" id="experience">

        {/* <div className="absolute bottom-48 right-1  z-0 w-72 h-72 bg-blob1 rounded-full mix-blend-multiply filter opacity-70 animate-blob blur-lg"></div>
        <div className="absolute bottom-48         z-0 w-80 h-80 bg-blob2 rounded-full mix-blend-multiply filter opacity-70 animate-blob2 animation-delay-2000 blur-lg"></div>
        <div className="absolute bottom-4  left-0.25  z-0 w-96 h-96 bg-blob3 rounded-full mix-blend-multiply filter opacity-70 animate-blob3 animation-delay-4000 blur-lg"></div>
        <div className="absolute                   z-0 w-96 h-96 bg-blob4 rounded-full mix-blend-multiply filter opacity-70 animate-blob4 animation-delay-6000 blur-lg"></div>
        <div className="absolute          left-0.5  z-0 w-96 h-96 bg-blob4 rounded-full mix-blend-multiply filter opacity-70 animate-blob4 animation-delay-6000 blur-lg"></div> */}
       
        <div className="text-3xl font-bold mt-6 md:mt-10 mb-4 mx-4 ml-32 mr-16 text-left underline z-10 text-forest">Experience</div>
        
        <div className="pl-16 ml-6">
            {experience_list.map((experience) => (
            <ExperienceCard key={experience.github} experience={experience}></ExperienceCard>
        ))}
        </div>
        
        
    </div>
  )
}

export default Experience