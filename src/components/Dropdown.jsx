// eslint-disable-next-line react/prop-types
const Dropdown = ( {dropDownOpen, toggle}) => {
  const textClass = 'p-3 hover:underline'

  return (
    <div className={dropDownOpen ? "grid grid-rows-4 text-center justify-center items-center font-sans font-bold bg-white text-black" : "hidden"}
          onClick={toggle}>
        <a className= {textClass} href="#about">
          About
        </a>
        <a className= {textClass} href="#experience">
          Experience
        </a>
        <a className= {textClass} href="#projects">
          Projects
        </a>
        <a className= {textClass} href="#contact">
          Contact
        </a>
        <a className= {textClass} href="https://drive.google.com/file/d/1uxtN4RPKTYw3AUbuNptKV4wdN9-hF2cf/view?usp=sharing" target="_blank" rel="noreferrer">
          Resume
        </a>
    </div>
);
}

export default Dropdown