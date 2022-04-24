import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
  selectCount,
} from './counterSlice';
import styles from './Counter.module.less';
import { Button, Input } from 'antd';

export default function Counter() {
  const count = useSelector(selectCount);
  const dispatch = useDispatch();
  const [incrementAmount, setIncrementAmount] = useState('2');

  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Button type="primary" onClick={() => dispatch(increment())}>
          +
        </Button>
        <span className={styles.count}>{count}</span>
        <Button type="primary" ghost onClick={() => dispatch(decrement())}>
          -
        </Button>
      </div>
      <div className={styles.section}>
        <Input
          className={styles.input}
          value={incrementAmount}
          onChange={(e) => setIncrementAmount(e.target.value)}
        />
        <Button onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}>
          Add Amount
        </Button>
        <Button onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}>
          Add Async
        </Button>
      </div>
    </div>
  );
}
