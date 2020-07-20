import React, { useState, useEffect } from 'react'
import { useHistory, useLocation, useParams } from 'react-router-dom'

const PageEventEdit = () => {
  const [eventData, setEventData] = useState({
    title: '',
    start: '',
    end: '',
    color: '',
    info: '',
  })

  const history = useHistory()
  const location = useLocation()
  const { id: eventID } = useParams()

  //const eventID = match.params.id
  const isEditMode = eventID !== 'new'

  const goToHomePage = () => history.push('/')

  useEffect(() => {
    if (isEditMode) {
      fetch(`/api/events/${eventID}`)
        .then((res) => res.json())
        .then((data) => {
          if (data) {
            setEventData({
              title: data.title || '',
              start: data.start || '',
              end: data.end || '',
              color: data.color || '',
              info: data.info || '',
            })
          }
        })
        .catch((err) => console.log(err))
    } else {
      // const { state } = location
      // fix it later
      // setEventData((prevState) => ({
      //   ...prevState,
      //   start: state.eventData.start,
      //   end: state.eventData.end,
      // }))
    }
  }, [eventID, isEditMode, location])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const target = e.target
    const value = target.value
    const name = target.name

    setEventData((prevState) => ({
      ...prevState,
      [name]: value,
    }))
  }

  const handleCancel = () => {
    goToHomePage()
  }

  const handleDelete = () => {
    fetch(`/api/events/${eventID}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(() => goToHomePage())
      .catch((err) => console.log(err))
  }

  const handleSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    fetch(`/api/events/${isEditMode ? eventID : ''}`, {
      method: isEditMode ? 'PUT' : 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(eventData),
    })
      .then((res) => res.json())
      .then(() => goToHomePage())
      .catch((err) => console.log(err))
  }

  return (
    <div className="c-page-container">
      <form onSubmit={handleSave}>
        <legend>{isEditMode ? 'Event details' : 'Create new event'}</legend>
        <div className="form-group ">
          <label className="control-label " htmlFor="title">
            Title
          </label>
          <input
            className="form-control"
            name="title"
            type="text"
            value={eventData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group ">
          <label className="control-label " htmlFor="start">
            Start Date
          </label>
          <input
            className="form-control"
            name="start"
            type="text"
            value={eventData.start}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group ">
          <label className="control-label " htmlFor="end">
            End Date
          </label>
          <input
            className="form-control"
            name="end"
            type="text"
            value={eventData.end}
            onChange={handleInputChange}
          />
          <small className="hint">
            * End date is exclusive in the date range.
          </small>
        </div>
        <div className="form-group ">
          <label className="control-label " htmlFor="info">
            Details
          </label>
          <textarea
            className="form-control"
            cols={40}
            name="info"
            rows={5}
            value={eventData.info}
            onChange={handleInputChange}
          />
        </div>
        <div className="form-group ">
          <label className="control-label " htmlFor="color">
            Color
          </label>
          <input
            className="form-control"
            name="color"
            type="text"
            value={eventData.color}
            onChange={handleInputChange}
          />
          <small className="hint">
            * Valid HTML color. Like: red, #eee, #FFEE00.
          </small>
        </div>
        <div className="form-group">
          <div>
            <button
              className="btn btn-secondary"
              onClick={handleCancel}
              type="button"
            >
              Cancel
            </button>{' '}
            {isEditMode && (
              <>
                <button
                  className="btn btn-danger"
                  onClick={handleDelete}
                  type="button"
                >
                  Delete
                </button>{' '}
              </>
            )}
            <button className="btn btn-primary" type="submit">
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default PageEventEdit
