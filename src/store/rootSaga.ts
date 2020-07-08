import { fork, all } from 'redux-saga/effects';
import { watchGetPackageInfo } from './PackageInfo/sagas';

function* rootSaga() {
  yield all([fork(watchGetPackageInfo)]);
}

export default rootSaga;
