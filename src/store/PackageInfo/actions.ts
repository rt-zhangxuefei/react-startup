import { GET_PACKAGEINFO, PackageSagaAction } from './types';

export const getPackageInfo = (pkgName: string): PackageSagaAction => ({
  type: GET_PACKAGEINFO,
  pkgName,
});
