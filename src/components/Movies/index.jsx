import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import debounce from 'lodash.debounce';

import Movie from '../Movie';
import Spinner from '../Spinner';
import SearchBar from '../SearchBar';
import Cookies from '../Cookies';

import {
  getLoadingStateSelector,
  getErrorSelector,
  getFilteredMovies,
} from '../../store/reducers/movies/selectors/MovieSelectors';
import { getMoviesThunk } from '../../store/reducers/movies/thunks/moviesThunk';
import { search } from '../../store/reducers/movies/moviesSlice';

import './movies.scss';

const Movies = () => {
  const dispatch = useDispatch();

  const isLoading = useSelector(getLoadingStateSelector);

  const isError = useSelector(getErrorSelector);

  const filteredMovies = useSelector(getFilteredMovies);

  const numberOfFilteredMovies = useMemo(
    () => filteredMovies.length,
    [filteredMovies.length]
  );

  const prevCountRef = React.useRef();

  const handleSearch = useCallback((e) => {
    dispatch(search(e.target.value));
  }, [dispatch]);

  const debouncedResults = useMemo(() => debounce(handleSearch, 300), [handleSearch]);

  useEffect(() => {
    dispatch(getMoviesThunk());

    return () => {
      debouncedResults.cancel();
    }
  }, [debouncedResults, dispatch]);

  useEffect(() => {
    prevCountRef.current = numberOfFilteredMovies;
  }, [numberOfFilteredMovies]);

  if (isError) {
    return (
      <div>Ooops, something went wrong</div>
    );
  }

  if(isLoading) {
    return <Spinner />;
  }

  return (
    <div className="movies-wrapper">

      <div className="movies-info">
        <Cookies />

        <SearchBar 
          debouncedResults={debouncedResults}
        />

        Now: {numberOfFilteredMovies},
        before: {prevCountRef.current}
      </div>

      <div className="movies-list">
        {filteredMovies.map((m) => 
          <Movie
            key={m.eventId} 
            movie={m} 
          />)}
      </div>
    </div>
  );
};

export default Movies;
