import { SET_RESULT } from '../contants';

const initState = {
  result: null
};

const box = (state = initState, action) => {
  switch (action.type) {
    case SET_RESULT: {
      return {
        ...state,
        result: action.payload
      };
    }
    default:
      return state;
  }
};

export default box;
