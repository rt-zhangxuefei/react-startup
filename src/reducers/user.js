import { FETCH_USER_FAILURE, FETCH_USER_SUCCESS } from '../constants/user';

const initialState = {
  users: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER_SUCCESS:
      return {
        users: action.payload,
      };
    case FETCH_USER_FAILURE:
      return {
        error: action.payload,
        users: {},
      };
    default:
      return state;
  }
};
