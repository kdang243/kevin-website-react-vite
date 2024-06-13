/* eslint-disable react/prop-types */
const PlayButton = ({gameLink}) => {
  return (
    <a className="inline-block border-white text-white font-semibold px-1 ml-4 mb-3 rounded-lg border-2 cursor-pointer hover:scale-105 hover:bg-leaf" href={gameLink} target="_blank" rel="noreferrer">
            <span className="font-bold text-lg mr-1.5 ml-1.5 underline">Play {'>'} </span>
        </a>
  )
}

export default PlayButton