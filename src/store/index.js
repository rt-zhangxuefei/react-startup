import { configureStore } from '@reduxjs/toolkit'
import boxReducer from './slices/boxSlice'

export default configureStore({
  reducer: {
    box: boxReducer
  }
})
