import * as types from './types'

export const getEvents = () => ({
  type: types.EVENTS_REQUEST,
})

export const setEvents = (data) => ({
  type: types.EVENTS_SUCCESS,
  payload: data,
})

export const setErrorEvents = (error) => ({
  type: types.EVENTS_FAILED,
  payload: error,
})
