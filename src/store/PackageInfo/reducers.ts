import {
  GET_PACKAGEINFO_SUCCESS,
  PackageState,
  PackageAction,
  GET_PACKAGEINFO_FAILURE,
} from './types';

const initState: PackageState = {
  packageInfo: undefined,
};

const reducer = (state = initState, action: PackageAction) => {
  switch (action.type) {
    case GET_PACKAGEINFO_SUCCESS:
      return {
        packageInfo: action.payload,
      };
    case GET_PACKAGEINFO_FAILURE:
      return {
        packageInfo: { error: action.payload },
      };
    default:
      return state;
  }
};

export default reducer;
