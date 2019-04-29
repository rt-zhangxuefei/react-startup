import { takeLatest, call, put } from 'redux-saga/effects'
import axios from 'axios'
import {
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST
} from '../constants/user'

function* fetchOneUser() {
  try {
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/users`
    )
    yield put({ type: FETCH_USER_SUCCESS, user: response.data[0] })
  } catch (e) {
    yield put({ type: FETCH_USER_FAILURE, error: e.message })
  }
}

function* watchFetchUser() {
  yield takeLatest(FETCH_USER_REQUEST, fetchOneUser)
}

export const userSagas = [watchFetchUser()]