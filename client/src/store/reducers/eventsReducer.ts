import * as types from '../actions/types'

const initialState = {
  isLoading: false,
  data: [],
  errors: null,
}

function eventsReducer(
  state = initialState,
  action: { type: any; payload: any }
) {
  switch (action.type) {
    case types.EVENTS_REQUEST:
      return { ...state, isLoading: true, errors: null }
    case types.EVENTS_SUCCESS:
      return { ...state, isLoading: false, errors: null, data: action.payload }
    case types.EVENTS_FAILED:
      return { ...state, isLoading: false, errors: action.payload }
    default:
      return state
  }
}

export default eventsReducer
