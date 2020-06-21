import { all } from 'redux-saga/effects'
import eventsSaga from './eventsSaga'

function* rootSaga() {
  yield all([eventsSaga()])
}

export default rootSaga
