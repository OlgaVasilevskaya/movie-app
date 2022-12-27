import { createSelector } from '@reduxjs/toolkit';

export const getMovies = state => state.movies;

export const getAllMoviesSelector = createSelector(
  getMovies, info => info.movies
);

export const getLoadingStateSelector = createSelector(
  getMovies, info => info.isLoading
);

export const getErrorSelector = createSelector(
  getMovies, info => info.isError
);

export const getFilteredMovies = createSelector(
  getMovies, info => info.filteredMovies
);

export const getSearchQuery = createSelector(
  getMovies, info => info.searchQuery
);
