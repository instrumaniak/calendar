import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

const localizer = BigCalendar.momentLocalizer(moment)

const PageHome = () => {
  return (
    <div className='c-bigcalendar-container'>
      <BigCalendar
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
