import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../constants/user';

const initialState = {
  loading: false,
  error: null,
  user: null
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        loading: true,
        error: null,
        user: null
      };
    case FETCH_USER_SUCCESS:
      return {
        loading: false,
        error: null,
        user: action.payload
      };
    case FETCH_USER_FAILURE:
      return {
        loading: false,
        error: action.payload,
        user: null
      };
    default:
      return state;
  }
};

export default user;
