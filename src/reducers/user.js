import {
  FETCH_USER_REQUEST,
  FETCH_USER_SUCCESS,
  FETCH_USER_FAILURE
} from '../constants/user'

const initialState = {
  isFetching: false,
  error: null,
  user: null
}

const user = (state = initialState, action = {}) => {
  switch (action.type) {
    case FETCH_USER_REQUEST:
      return {
        isFetching: true,
        error: null,
        user: null
      }
    case FETCH_USER_SUCCESS:
      return {
        isFetching: false,
        error: null,
        user: action.user
      }
    case FETCH_USER_FAILURE:
      return {
        isFetching: false,
        error: action.error,
        user: null
      }
    default:
      return state
  }
}

export default user
