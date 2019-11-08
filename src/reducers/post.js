import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS
} from "../constants/post";

const initialState = {
  content: null
};

const post = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        content: null
      };
    case FETCH_POST_SUCCESS:
      return {
        content: action.payload
      };
    case FETCH_POST_FAILURE:
      return {
        content: []
      };
    default:
      return state;
  }
};

export default post;
