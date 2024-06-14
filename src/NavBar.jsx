// import { Link } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const NavBar = ({ toggle, dropDownOpen }) => {

  return (
    <nav className="relative py-3 bg-forest border-b border-white align-middle flex justify-center" >

      <div className="cursor-pointer md:hidden pr-6" onClick={toggle}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={dropDownOpen ? "h-6 w-6" : "h-6 w-6 transform rotate-180" }
         
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M5 15l7-7 7 7"
          />
        </svg>
      </div>

      <div className='font-sans font-bold text-white md:block hidden p-2 pr-2 '>
        <a className='p-10 hover:underline animate-slideIn2' href="#about">
          About
        </a>
        <a className='p-10 hover:underline animate-slideIn3' href="#experience">
          Experience
        </a>
        <a className='p-10 hover:underline animate-slideIn4' href="#projects">
          Projects
        </a>
        <a className='p-10 hover:underline animate-slideIn5' href="#contact">
          Contact
        </a>
        <a className='p-10 hover:underline animate-slideIn6' href="https://drive.google.com/file/d/1uxtN4RPKTYw3AUbuNptKV4wdN9-hF2cf/view?usp=sharing" target="_blank" rel="noreferrer">
          Resume
        </a>
      </div>
    </nav>
  )
}

export default NavBar
