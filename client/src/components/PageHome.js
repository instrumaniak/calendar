import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Calendar, momentLocalizer} from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const PageHome = () => {
  const [ events, setEvents ] = useState([])
  const [ selectedEventID, setSelectedEventID ] = useState('')

  useEffect(()=>{
    fetch('/api/events')
      .then(res => res.json())
      .then(data => setEvents(data))
  }, [])

  const handleEventSelect = (event, e) => {
    if(event._id) {
      setSelectedEventID(event._id)
    }
  }

  if(selectedEventID.length > 0) {
    return <Redirect to={`/event/${selectedEventID}`} />
  }

  return (
    <div className='c-bigcalendar-container'>
      <Calendar
        localizer={localizer}
        toolbar={false}
        events={events}
        onSelectEvent={handleEventSelect}
      />
    </div>
  )
}

export default PageHome
