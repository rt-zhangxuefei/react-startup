import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS
} from '../constants/post';

const initialState = {
  loading: false,
  error: null,
  post: null
};

const post = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        loading: true,
        error: null,
        post: null
      };
    case FETCH_POST_SUCCESS:
      return {
        loading: false,
        error: null,
        post: action.payload
      };
    case FETCH_POST_FAILURE:
      return {
        loading: false,
        error: action.payload,
        post: null
      };
    default:
      return state;
  }
};

export default post;
