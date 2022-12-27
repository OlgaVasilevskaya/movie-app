import { createSelector } from '@reduxjs/toolkit';

export const getDetails = state => state.details;

export const getAllDetailsSelector = createSelector(
  getDetails, info => info.details[0]
);

export const getLoadingStateSelector = createSelector(
  getDetails, info => info.isLoading
);

export const getErrorSelector = createSelector(
  getDetails, info => info.isError
);
