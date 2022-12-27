import { createSlice } from '@reduxjs/toolkit';
import { getDetailsThunk } from './thunks/detailsThunk';

const initialState = {
  details: [0],
  isLoading: false,
  isError: false
};

const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {},
  extraReducers: {
    [getDetailsThunk.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getDetailsThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.details = payload;
      state.isError = false;
    },
    [getDetailsThunk.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
})

export default detailsSlice.reducer;
