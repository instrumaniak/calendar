import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const PageHome = () => {
  const [events, setEvents] = useState([])
  const [selectedEventID, setSelectedEventID] = useState('')
  const [newEvent, setNewEvent] = useState({})

  useEffect(() => {
    fetch('/api/events')
      .then((res) => res.json())
      .then((data) => setEvents(data))
  }, [])

  const handleSelectEvent = (event, e) => {
    if (event._id) {
      setSelectedEventID(event._id)
    }
  }

  const handleSelectSlot = (data) => {
    setNewEvent(data)
    setSelectedEventID('new')
  }

  if (selectedEventID.length > 0) {
    return (
      <Redirect
        to={{
          pathname: `/event/${selectedEventID}`,
          state: { isNew: selectedEventID === 'new', eventData: newEvent },
        }}
      />
    )
  }

  return (
    <div className="c-bigcalendar-container">
      <Calendar
        selectable
        localizer={localizer}
        toolbar={false}
        events={events}
        onSelectEvent={handleSelectEvent}
        onSelectSlot={handleSelectSlot}
      />
    </div>
  )
}

export default PageHome
