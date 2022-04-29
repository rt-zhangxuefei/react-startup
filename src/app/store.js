import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './slice/counterSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
  },
});
