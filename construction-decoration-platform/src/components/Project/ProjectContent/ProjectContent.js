import React from 'react'
import "./ProjectContent.scss"
import IntroImg from "../../../assets/images/construction/introImage.jpg"

function ProjectContent() {
  return (
    <div className='project-content'>
      <div className='project-content-element'>
        <img src={IntroImg}/>
      </div>

      <div className='project-content-element'>
        <img src={IntroImg}/>
      </div>

      <div className='project-content-element'>
        <img src={IntroImg}/>
      </div>
    </div>
  )
}

export default ProjectContent