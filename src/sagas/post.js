import { takeLatest, call, put } from 'redux-saga/effects';
import axios from 'axios';
import {
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS,
  FETCH_POST_FAILURE
} from '../constants/post';

function* fetchPostByPage({ pageIndex }) {
  try {
    const response = yield call(
      axios.get,
      `https://jsonplaceholder.typicode.com/posts/${pageIndex}`
    );
    yield put({ type: FETCH_POST_SUCCESS, post: response.data });
  } catch (e) {
    yield put({ type: FETCH_POST_FAILURE, error: e.message });
  }
}

function* watchFetchPostByPage() {
  yield takeLatest(FETCH_POST_REQUEST, fetchPostByPage);
}

export const postSagas = [watchFetchPostByPage()];
