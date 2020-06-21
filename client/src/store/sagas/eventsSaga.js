import { call, takeEvery, all, put } from 'redux-saga/effects'
import * as types from '../actions/types'
import { fetchEvents } from '../../api/events'
import { setEvents, setErrorEvents } from '../actions/eventsAction'

function* handleGetEvents() {
  try {
    const events = yield call(fetchEvents)
    yield put(setEvents(events))
  } catch (error) {
    yield put(setErrorEvents(error.toString()))
  }
}

export default function* watchAll() {
  yield all([takeEvery(types.EVENTS_REQUEST, handleGetEvents)])
}
