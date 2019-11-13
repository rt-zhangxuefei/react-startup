import { FETCH_POST_REQUEST } from '../constants/post';

export const getPostByPage = pageIndex => {
  return {
    type: FETCH_POST_REQUEST,
    pageIndex,
  };
};
