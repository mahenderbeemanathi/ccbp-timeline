// Write your code here
import {AiFillCalendar} from 'react-icons/ai'

import './index.css'

const ProjectTimelineCard = props => {
  const {projectDetails} = props
  const {
    description,
    duration,
    imageUrl,
    projectTitle,
    projectUrl,
  } = projectDetails

  return (
    <div className="project-card">
      <img src={imageUrl} alt="project" className="img" />
      <div>
        <div className="project-header">
          <h1>{projectTitle}</h1>
          <div className="duration-cont">
            <AiFillCalendar />
            <p>{duration}</p>
          </div>
        </div>
        <p>{description}</p>
        <a className="visit" href={projectUrl}>
          Visit
        </a>
      </div>
    </div>
  )
}

export default ProjectTimelineCard
