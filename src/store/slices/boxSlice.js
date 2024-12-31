import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('box/fetchData', async () => {
  const res = await new Promise((resolve) => {
    setTimeout(() => {
      resolve(1);
    }, 1000);
  });
  return res;
});

export const boxSlice = createSlice({
  name: 'box',
  initialState: {
    value: 0
  },
  reducers: {
    increment: (state) => {
      state.value += 1;
    }
  },
  extraReducers: (builder) => {
    builder.addCase(fetchData.fulfilled, (state, action) => {
      state.value = action.payload;
    });
  }
});

export const { increment } = boxSlice.actions;

export default boxSlice.reducer;
