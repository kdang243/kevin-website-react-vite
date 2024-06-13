/* eslint-disable react/prop-types */
const CompanyWebsiteButton = ({link}) => {
  return (
    <a className="inline-block border-white text-white font-semibold px-1 py-0.5 ml-4 mt-3 mb-3 rounded-lg border-2 cursor-pointer" href={link} target="_blank" rel="noreferrer">
          <span className="text-customblack font-bold text-lg">Company Website</span>
      </a>
  )
}

export default CompanyWebsiteButton