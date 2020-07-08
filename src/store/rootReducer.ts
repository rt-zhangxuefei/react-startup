import { combineReducers } from 'redux';
import pkg from './PackageInfo/reducers';
import { PackageState } from './PackageInfo/types';

export interface AppState {
  pkg: PackageState;
  login: any;
}

const rootReducer = combineReducers({ pkg });

export default rootReducer;
