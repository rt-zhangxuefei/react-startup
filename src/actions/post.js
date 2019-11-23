import { FETCH_POST_REQUEST } from '../constants/post';

export const getPostByPage = pageIndex => ({
  type: FETCH_POST_REQUEST,
  pageIndex,
});
