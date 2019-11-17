import { FETCH_POST_FAILURE, FETCH_POST_SUCCESS } from '../constants/post';

const initialState = {
  content: null,
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_POST_SUCCESS:
      return {
        content: action.payload,
      };
    case FETCH_POST_FAILURE:
      return {
        content: [],
      };
    default:
      return state;
  }
};
