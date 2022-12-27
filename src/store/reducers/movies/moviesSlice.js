import { createSlice } from '@reduxjs/toolkit';
import { getMoviesThunk } from './thunks/moviesThunk';

const initialState = {
  movies: [],
  isLoading: false,
  isError: false,
  filteredMovies: [],
  searchQuery: ''
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    search: (state, action) => {
      state.searchQuery = action.payload;

      state.filteredMovies = state.movies.filter(movie => 
        movie.name.toLowerCase().includes(state.searchQuery)
      );
    }
  },
  extraReducers: {
    [getMoviesThunk.pending]: (state) => {
      state.isLoading = true;
      state.isError = false;
    },
    [getMoviesThunk.fulfilled]: (state, { payload }) => {
      state.isLoading = false;
      state.movies = payload;
      state.filteredMovies = payload;
      state.isError = false;
    },
    [getMoviesThunk.rejected]: (state) => {
      state.isLoading = false;
      state.isError = true;
    },
  },
})

export const { search } = moviesSlice.actions;

export default moviesSlice.reducer;
