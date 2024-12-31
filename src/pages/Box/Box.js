import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { fetchData, increment } from '../../store/slices/boxSlice';
import styles from './Box.module.less';

const Box = () => {
  const count = useSelector((state) => state.box.value);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData());
  }, []);
  return (
    <div className={styles.Box} onClick={() => dispatch(increment())}>
      {count}
    </div>
  );
};

export default Box;
