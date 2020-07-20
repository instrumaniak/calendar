import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { Calendar, momentLocalizer } from 'react-big-calendar'
import moment from 'moment'

const localizer = momentLocalizer(moment)

const PageHome = ({ events }: { events: any[] }) => {
  const [selectedEventID, setSelectedEventID] = useState('')
  const [newEvent, setNewEvent] = useState({})

  const handleSelectEvent = (event: any) => {
    if (event._id) {
      setSelectedEventID(event._id)
    }
  }

  const handleSelectSlot = (data: any) => {
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

PageHome.defaultProps = {
  events: [],
}

export default PageHome
