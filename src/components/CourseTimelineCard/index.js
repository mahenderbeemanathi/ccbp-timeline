// Write your code here
import {AiFillClockCircle} from 'react-icons/ai'

import './index.css'

const CourseTimelineCard = props => {
  const {courseDetails} = props
  const {courseTitle, description, duration, tagsList} = courseDetails
  return (
    <div className="course-card">
      <div className="course-header">
        <h1>{courseTitle}</h1>
        <div className="duration-container">
          <AiFillClockCircle />
          <p>{duration}</p>
        </div>
      </div>
      <p>{description}</p>
      <ul className="tags-container">
        {tagsList.map(each => {
          const {name, id} = each
          return (
            <li key={id}>
              <p className="tag-item">{name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default CourseTimelineCard
