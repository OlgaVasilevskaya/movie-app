import { createSelector } from '@reduxjs/toolkit';

export const getUser = state => state.user;

export const getUserSelector = createSelector(
  getUser, info => info.user
);

export const getUserEmailSelector = createSelector(
  getUser, info => info.user?.email
);

export const getUsersSelector = createSelector(
  getUser, info => info.users
);

export const getAuthUserSelector = createSelector(
  getUser, info => info.authUser
);

export const getUserByEmailSelector = createSelector(
  getUser, info => info.users.find(item => info.authUser === item.email)
);
