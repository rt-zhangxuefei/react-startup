import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect';

import { getResult } from '../../store/actions/box';
import styles from './Box.module.less';

const selectResult = createSelector(
  (state) => state.box,
  (box) => box.result
);

const Box = () => {
  const dispatch = useDispatch();
  const result = useSelector(selectResult);
  useEffect(() => {
    dispatch(getResult());
  }, []);
  return <div className={styles.Box}>{result || 'loading'}</div>;
};

export default Box;
