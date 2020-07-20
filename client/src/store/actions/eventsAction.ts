import * as types from './types'

export const getEvents = () => ({
  type: types.EVENTS_REQUEST,
})

export const setEvents = (data: any) => ({
  type: types.EVENTS_SUCCESS,
  payload: data,
})

export const setErrorEvents = (error: any) => ({
  type: types.EVENTS_FAILED,
  payload: error,
})
