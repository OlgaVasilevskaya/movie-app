import { createSlice } from '@reduxjs/toolkit';

interface IUserState {
  user: string | null,
  users: any[],
  authUser: string
}

export const userSlice = createSlice({
  name: 'user',
  initialState:{
    user: null,
    users: [],
    authUser: '',
  },
  reducers: {
    login: (state: IUserState, action) => {
      state.users.filter((item) => item.email !== action.payload.email);
      state.user = action.payload;
    },
    logout: (state: IUserState) => {
      state.user = null;
    },
    signup: (state: IUserState, action) => {
      state.users.push(action.payload);
    },
    changeInfo: (state: IUserState, action) => {
      const notAuthUser = state.users.filter((item) => item.email !== action.payload.email);
      state.users = [...notAuthUser, action.payload];
    },
    setUserAuth: (state: IUserState, action) => {
      state.authUser = action.payload;
    },
    setUserNotAuth: (state: IUserState) => {
      state.authUser = '';
    },
  },
});

export const {login, logout, signup, changeInfo, setUserAuth, setUserNotAuth} = userSlice.actions;

export default userSlice.reducer;
