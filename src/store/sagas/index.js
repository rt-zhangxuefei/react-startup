import { fork } from 'redux-saga/effects';

import { watchHandleRequest } from './box';

export default function* rootSaga() {
  yield fork(watchHandleRequest);
}
