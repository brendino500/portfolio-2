import React from 'react'

const ProjectImage = ({ href, src, className }) => {
  return (
    <div>
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="project-img"
      >
        <img src={src} alt="project" className={className} />
      </a>
    </div>
  )
}

export default ProjectImage

//"https://sei-project1-tetris.netlify.app/"
//"https://i.ibb.co/LZcsFxy/tetris2.png"
