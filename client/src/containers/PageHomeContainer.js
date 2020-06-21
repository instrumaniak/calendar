import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import PageHome from '../components/PageHome'
import { getEvents } from '../store/actions/eventsAction'

const PageHomeContainer = ({ events, getEvents }) => {
  useEffect(() => {
    getEvents()
  }, [getEvents])

  return <PageHome events={events} />
}

const mapStateToProps = (state) => ({
  events: state.events.data,
})

const mapDispatchToProps = {
  getEvents,
}

export default connect(mapStateToProps, mapDispatchToProps)(PageHomeContainer)
