const Hero = () => {
  return (
    <>
    <div className="bg-white min-h-screen flex items-center justify-center px-8">
        <div className="relative w-full h-full max-w-lg">        
            <div className="absolute bottom-1.5 right-1 w-72 h-72 bg-blob1 rounded-full mix-blend-multiply filter opacity-70 animate-blob "></div>
            <div className="absolute bottom-1.5 w-80 h-80 bg-blob2 rounded-full mix-blend-multiply filter opacity-70 animate-blob2 animation-delay-2000 "></div>
            <div className="absolute right-1 w-96 h-96 bg-blob3 rounded-full mix-blend-multiply filter opacity-70 animate-blob3 animation-delay-4000 "></div>
            <div className="absolute top-1.5 w-80 h-80 bg-blob4 rounded-full mix-blend-multiply filter opacity-70 animate-blob4 animation-delay-6000"></div>
    

            <div className=" bottom-36 relative space-y-4">
                <a href="">Hi! My name is Kevin</a>
            </div>

        </div>
    </div>
    </>
  )
}

export default Hero