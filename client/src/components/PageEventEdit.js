import React, { useState, useEffect } from 'react'

const PageEventEdit = ({ match }) => {
  const [ eventData, setEventData ] = useState({
    _id: '',
    title: '',
    start: '',
    end: '',
    color: '',
    info: ''
  })

  useEffect(()=>{
    fetch(`/api/events/${match.params.id}`)
      .then(res => res.json())
      .then(data => setEventData({
        _id: data._id || '',
        title: data.title || '',
        start: data.start || '',
        end: data.end || '',
        color: data.color || '',
        info: data.info || ''
      }))
      .catch(err => console.log(err))
  },[match.params.id])

  return (
    <div className='c-page-container'>
      <form>
        <legend>Event Details</legend>
        <div className="form-group ">
          <label className="control-label " htmlFor="title">
            Title
          </label>
          <input className="form-control" name="title" type="text" value={eventData.title} />
        </div>
        <div className="form-group ">
          <label className="control-label " htmlFor="start">
            Start Date
          </label>
          <input className="form-control" name="start" type="text" value={eventData.start}/>
        </div>
        <div className="form-group ">
          <label className="control-label " htmlFor="end">
            End Date
          </label>
          <input className="form-control" name="end" type="text" value={eventData.end}/>
          <small className="hint">* End date is exclusive in the date range.</small>
        </div>
        <div className="form-group ">
          <label className="control-label " htmlFor="info">
            Details
          </label>
          <textarea className="form-control" cols={40} name="info" rows={5} value={eventData.info}/>
        </div>
        <div className="form-group ">
          <label className="control-label " htmlFor="color">
            Color
          </label>
          <input className="form-control" name="color" type="text" value={eventData.color}/>
          <small className="hint">* Valid HTML color. Like: red, #eee, #FFEE00.</small>
        </div>
        <div className="form-group">
          <div>
            <button className="btn btn-secondary">Cancel</button>{' '}
            <button className="btn btn-danger">Delete</button>{' '}
            <button className="btn btn-primary" disabled>
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PageEventEdit
