// import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
const NavBar = ({ toggle }) => {
  // const navText = 'p-5 hover:underline'

  return (
    <nav className="relative py-3 flex justify-between bg-gray-200 border-b border-white align-middle" >
      <div className='font-sans font-semi-bold text-black text-3xl'>
        <a className="p-5  hover:underline animate-slideIn1" href="">
          Kevin Dang
        </a>
      </div>

      <div className="cursor-pointer md:hidden pr-6" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>

      <div className='font-sans font-bold text-black md:block hidden p-2 pr-2'>
        <a className='p-5 hover:underline animate-slideIn2' href="#about">
          About
        </a>
        <a className='p-5 hover:underline animate-slideIn3' href="#experience">
          Experience
        </a>
        <a className='p-5 hover:underline animate-slideIn4' href="#projects">
          Projects
        </a>
        <a className='p-5 hover:underline animate-slideIn5' href="#contact">
          Contact
        </a>
        <a className='p-5 hover:underline animate-slideIn6' href="https://drive.google.com/file/d/1uxtN4RPKTYw3AUbuNptKV4wdN9-hF2cf/view?usp=sharing" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </nav>
  )
}

export default NavBar
