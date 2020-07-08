export const GET_PACKAGEINFO = 'GET_PACKAGEINFO';
export const GET_PACKAGEINFO_SUCCESS = 'GET_PACKAGEINFO_SUCCESS';
export const GET_PACKAGEINFO_FAILURE = 'GET_PACKAGEINFO_FAILURE';

export interface PackageInfo {
  homepage: string;
  starsCount: number;
  forksCount: number;
  issues: Object;
}

export interface PackageState {
  packageInfo: PackageInfo | undefined;
}

export interface PackageAction {
  type: typeof GET_PACKAGEINFO_SUCCESS | typeof GET_PACKAGEINFO_FAILURE;
  payload: PackageInfo;
}

export interface PackageSagaAction {
  type: typeof GET_PACKAGEINFO;
  pkgName: string;
}
