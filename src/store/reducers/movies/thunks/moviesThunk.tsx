import { createAsyncThunk } from '@reduxjs/toolkit';

import { api } from 'services/api';

export const getMoviesThunk = createAsyncThunk(
  'movies/getMovies',

  async () => {
    const { data } = await api.get('data?filter=%7B%22city%22:1%7D&extended=true');

    return data;
  },
);
