import {
  FETCH_USER_FAILURE,
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS
} from "../constants/user";

const initialState = {
  users: null
};

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        users: null
      };
    case FETCH_USER_SUCCESS:
      return {
        users: action.payload
      };
    case FETCH_USER_FAILURE:
      return {
        error: action.payload,
        users: {}
      };
    default:
      return state;
  }
};

export default user;
