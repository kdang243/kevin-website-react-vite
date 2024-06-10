const Hero = () => {
  return (
    <>
    <div className="bg-white min-h-screen flex items-center justify-center px-16">
        <div className="relative w-full h-full max-w-xl">        
            <div className="absolute bottom-48 right-1  w-72 h-72 bg-blob1 rounded-full mix-blend-multiply filter opacity-70 animate-blob blur-lg"></div>
            <div className="absolute bottom-48          w-80 h-80 bg-blob2 rounded-full mix-blend-multiply filter opacity-70 animate-blob2 animation-delay-2000 blur-lg"></div>
            <div className="absolute bottom-4 right-1   w-96 h-96 bg-blob3 rounded-full mix-blend-multiply filter opacity-70 animate-blob3 animation-delay-4000 blur-lg"></div>
            <div className="absolute                    w-96 h-96 bg-blob4 rounded-full mix-blend-multiply filter opacity-70 animate-blob4 animation-delay-6000 blur-lg"></div>
            <div className="absolute top-32 right-4     w-80 h-80 bg-blob4 rounded-full mix-blend-multiply filter opacity-70 animate-blob4 animation-delay-6000 blur-lg"></div>
    

            <div className="bottom-24 relative w-full space-y-4 font-sans font-semibold text-black items text-center justify-center ">
                <a className="text-7xl p-1 animate-slideIn6" href="">Hi! My name is Kevin Dang</a>
                <br />
                <a className="text-3xl animate-slideIn7" href="">Software Developer</a>
                <br />
                <a className="text-3xl animate-slideIn8" href="">BSc in Computer Science (UBC)</a>
            </div>
            

            {/* <div className='font-sans font-semi-bold text-black text-3xl'>
                    <a className="p-5  hover:underline animate-slideIn1" href="">
                    
                    </a>
                </div> */}

        </div>
    </div>
    </>
  )
}

export default Hero