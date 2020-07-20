import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PageHome from '../components/PageHome'
import { getEvents } from '../store/actions/eventsAction'

const PageHomeContainer = ({
  events,
  getEvents,
}: {
  events: any[]
  getEvents: () => void
}) => {
  useEffect(() => {
    getEvents()
  }, [getEvents])

  return <PageHome events={events} />
}

const mapStateToProps = (state: any) => ({
  events: state.events.data,
})

const mapDispatchToProps = {
  getEvents,
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHomeContainer)
