import { put, takeLatest } from 'redux-saga/effects';

import { GET_RESULT, SET_RESULT } from '../contants';

function* handleRequest(data) {
  try {
    // 模拟异步接口
    const res = yield new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve('Hello World');
      }, 1000);
    });
    yield put({ type: SET_RESULT, payload: res });
  } catch (error) {
    yield put({ type: SET_RESULT, payload: null });
  }
}
export function* watchHandleRequest() {
  yield takeLatest(GET_RESULT, handleRequest);
}
