import {
  FETCH_POST_FAILURE,
  FETCH_POST_REQUEST,
  FETCH_POST_SUCCESS
} from '../constants/post'

const initialState = {
  isFetching: false,
  error: null,
  post: null
}

const post = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_POST_REQUEST:
      return {
        isFetching: true,
        error: null,
        post: null
      }
    case FETCH_POST_SUCCESS:
      return {
        isFetching: false,
        error: null,
        post: action.post
      }
    case FETCH_POST_FAILURE:
      return {
        isFetching: false,
        error: action.error,
        post: null
      }
    default:
      return state
  }
}

export default post
