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
        events={[]}
      />
    </div>
  )
}

export default PageHome
