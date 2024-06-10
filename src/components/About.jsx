import AboutDescript from "./AboutDescript"

const About = () => {

    const imgOneLink = "https://i.ibb.co/c6fyXXT/Screen-Shot-2024-06-09-at-10-40-04-PM.png"
    // const imgTwoLink = "https://i.ibb.co/PWD7qns/61136251-177475249934327-6455957598847234331-n.jpg"  

  return (
    <div className="pb-12 relative flex flex-col min-h-min items-center text-left xl:flex-row bg-forest -mt-12" id="about">
        <AboutDescript></AboutDescript>
        
        <div className="min-w-max mr-20 mt-6 mb-6">
            <img className="border-2 border-opacity-0 border-customwhite hover:border-opacity-100 rounded-xl mr-2.5" width="280" height="230" src={imgOneLink} alt=""></img>
        </div>
    </div>
  )
}

export default About