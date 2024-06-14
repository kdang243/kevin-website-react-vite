/* eslint-disable react/prop-types */
const CompanyWebsiteButton = ({link}) => {
  return (
    <a className="inline-flex ml-4 mt-3 mb-3 rounded-md border-2 border-white text-white cursor-pointer hover:scale-105 hover:bg-leaf" href={link} target="_blank" rel="noreferrer">
<svg className="my-0.5 mx-1.5" strokeWidth="0" viewBox="0 0 20 20" height="1.5em" width="1.5em"  xmlns="http://www.w3.org/2000/svg">
    <path d="M21,3H3v18h18V3z M9,17H6.477v-7H9V17z M7.694,8.717c-0.771,0-1.286-0.514-1.286-1.2s0.514-1.2,1.371-1.2 c0.771,0,1.286,0.514,1.286,1.2S8.551,8.717,7.694,8.717z M18,17h-2.442v-3.826c0-1.058-0.651-1.302-0.895-1.302 s-1.058,0.163-1.058,1.302c0,0.163,0,3.826,0,3.826h-2.523v-7h2.523v0.977C13.93,10.407,14.581,10,15.802,10 C17.023,10,18,10.977,18,13.174V17z"></path>
</svg>            <span className="font-bold text-lg  ml-1 mr-1.5 underline" >LinkedIn {'>'}</span>
        </a>

  )
}

export default CompanyWebsiteButton