import { all } from 'redux-saga/effects'

function* helloSaga() {
  console.log('Hello from redux saga!')
}

function* rootSaga() {
  yield all([helloSaga()])
}

export default rootSaga
