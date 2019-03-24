import React from 'react'

const PageEventEdit = () => {
  return (
    <div className='container-fluid'>
      <div className="row align-items-center">
        <div className="col-md-8 offset-md-2">
          <form>
            <legend>Event Details</legend>
            <div className="form-group ">
              <label className="control-label " htmlFor="title">
                Title
              </label>
              <input className="form-control" id="title" name="title" type="text" />
            </div>
            <div className="form-group ">
              <label className="control-label " htmlFor="start">
                Start Date
              </label>
              <input className="form-control" id="start" name="start" type="text" />
            </div>
            <div className="form-group ">
              <label className="control-label " htmlFor="end">
                End Date
              </label>
              <input className="form-control" id="end" name="end" type="text" />
              <small className="hint">* End date is exclusive in the date range.</small>
            </div>
            <div className="form-group ">
              <label className="control-label " htmlFor="info">
                Details
              </label>
              <textarea className="form-control" cols={40} id="info" name="info" rows={5} defaultValue={""} />
            </div>
            <div className="form-group ">
              <label className="control-label " htmlFor="color">
                Color
              </label>
              <input className="form-control" id="color" name="color" type="text" />
              <small className="hint">* Valid HTML color. Like: red, #eee, #FFEE00.</small>
            </div>
            <div className="form-group">
              <div>
                <button className="btn btn-secondary">Cancel</button>{' '}
                <button className="btn btn-danger">Delete</button>{' '}
                <button className="btn btn-primary">
                  Save
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default PageEventEdit