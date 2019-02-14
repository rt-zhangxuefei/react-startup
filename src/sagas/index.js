import { all } from 'redux-saga/effects'
import { postSagas } from './post'
import { userSagas } from './user'

export default function* rootSaga() {
  yield all([...postSagas, ...userSagas])
}
