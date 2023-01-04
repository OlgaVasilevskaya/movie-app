import React, { ChangeEvent } from 'react';
import { useDispatch } from 'react-redux';

import TextField from '@mui/material/TextField';

import { search } from '../../store/reducers/movies/moviesSlice';

import { ISearchBarProps } from '../../types';

const SearchBar = (props: ISearchBarProps) => {
  const { debouncedResults } = props;

  const dispatch = useDispatch();

  return (
    <form>
      <TextField
        id="search-bar"
        onChange={debouncedResults}
        className="text"
        onInput={(e: ChangeEvent<HTMLInputElement>) => {
          dispatch(search(e.target.value));
        }}
        label="Search..."
        variant="outlined"
        placeholder="Search..."
        size="small"
      />
    </form>
  );
};

export default SearchBar;
