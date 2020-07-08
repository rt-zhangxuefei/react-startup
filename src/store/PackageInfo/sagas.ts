import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';
import { GET_PACKAGEINFO_URL } from '../../config';
import {
  GET_PACKAGEINFO_SUCCESS,
  GET_PACKAGEINFO_FAILURE,
  GET_PACKAGEINFO,
  PackageSagaAction,
} from './types';

function* getPackageInfo({ pkgName }: PackageSagaAction) {
  try {
    const response = yield axios.get(`${GET_PACKAGEINFO_URL}${pkgName}`);
    const { starsCount, forksCount } = response.data.collected.github;
    yield put({
      type: GET_PACKAGEINFO_SUCCESS,
      payload: { starsCount, forksCount },
    });
  } catch (error) {
    yield put({ type: GET_PACKAGEINFO_FAILURE, payload: error.messsage });
  }
}

export function* watchGetPackageInfo() {
  yield takeLatest(GET_PACKAGEINFO, getPackageInfo);
}
