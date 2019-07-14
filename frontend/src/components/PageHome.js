import React from 'react'
import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const PageHome = () => {
  return (
    <div className='c-bigcalendar-container'>
      <Calendar
        localizer={localizer}
        toolbar={false}
        events={[
          {
            title: 'Test Event',
            start: new Date(),
            end: new Date()
          },
          {
            title: 'Test Event 2',
            start: new Date(),
            end: new Date()
          }
        ]}
      />
    </div>
  )
}

export default PageHome
