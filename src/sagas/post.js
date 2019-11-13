import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import { FETCH_POST_REQUEST, FETCH_POST_SUCCESS, FETCH_POST_FAILURE } from '../constants/post';

function* fetchPostByPage({ pageIndex }) {
  try {
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/posts/${pageIndex}`,
    );
    yield put({ type: FETCH_POST_SUCCESS, payload: response.data });
  } catch (e) {
    yield put({ type: FETCH_POST_FAILURE, payload: e });
  }
}

export function* watchFetchPostByPage() {
  yield takeLatest(FETCH_POST_REQUEST, fetchPostByPage);
}
