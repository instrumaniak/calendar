import React, { useState, useEffect } from 'react'
import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const PageHome = () => {
  const [ events, setEvents ] = useState([])

  useEffect(()=>{
    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])

  return (
    <div className='c-bigcalendar-container'>
      <Calendar
        localizer={localizer}
        toolbar={false}
        events={events}
      />
    </div>
  )
}

export default PageHome
