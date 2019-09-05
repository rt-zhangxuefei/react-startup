import { fork } from 'redux-saga/effects';
import { watchFetchPostByPage } from './post';
import { watchFetchUser } from './user';

export default function* rootSaga() {
  yield fork(watchFetchPostByPage);
  yield fork(watchFetchUser);
}
