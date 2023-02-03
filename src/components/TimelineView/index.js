// Write your code here

import {Chrono} from 'react-chrono'

import CourseTimelineCard from '../CourseTimelineCard'

import ProjectTimelineCard from '../ProjectTimelineCard'

import './index.css'

const TimelineView = props => {
  const {timelineItemsList} = props

  return (
    <div>
      <h1>MY JOURNEY OF CCBP 4.0</h1>
      <div>
        <Chrono
          theme={{
            primary: 'blue',
            secondary: 'white',
            titleColor: 'blue',
          }}
          items={timelineItemsList}
          mode="VERTICAL_ALTERNATING"
        >
          {timelineItemsList.map(item => {
            const {categoryId} = item
            if (categoryId === 'PROJECT') {
              return (
                <div>
                  <ProjectTimelineCard key={item.id} projectDetails={item} />
                </div>
              )
            }
            return (
              <div>
                <CourseTimelineCard key={item.id} courseDetails={item} />
              </div>
            )
          })}
        </Chrono>
      </div>
    </div>
  )
}

export default TimelineView
