import { FETCH_USER_REQUEST } from '../constants/user'

export const getOneUser = () => {
  return {
    type: FETCH_USER_REQUEST
  }
}
