/* eslint-disable react/no-unescaped-entities */
const Contact = () => {
  return (
    <div className="relative flex flex-col h-1/2 items-center justify-center bg-forest  md:pt-32  md:pb-24  text-white" id="contact">
      <div className="text-4xl font-bold  text-center mx-4 mb-4">
        Let's talk more!
      </div>
      <div className="text-2xl px-5 md:px-12 text-center mb-4">
        I'd love to hear from you, shoot me an email at kevindang243@gmail.com!
      </div>

      <a className="flex  underline flex-row text-white rounded-lg border-2 border-white font-bold py-2 px-4 hover:bg-leaf focus:ring transform transition hover:scale-105 duration-300 ease-in-out" href="mailto:kevindang243@gmail.com" rel="noopener noreferrer" target="_blank">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
        <span>Say Hello</span>
      </a>
    </div>
  )
}

export default Contact