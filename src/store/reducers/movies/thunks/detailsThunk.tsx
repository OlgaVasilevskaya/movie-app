import { createAsyncThunk } from '@reduxjs/toolkit';
import { api } from "../../../../services/api";

export const getDetailsThunk = createAsyncThunk(
  'details/getDetails',

  async (eventId) => {
    const { data } = await api.get(`data?filter=%7B%22event%22:%22${eventId}%22,%22city%22:%221%22%7D&extended=true`);

    return data;
  }
)
