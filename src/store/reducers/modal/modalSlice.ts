import { createSlice } from '@reduxjs/toolkit';

import { EFormTypes } from '../../../types';

const initialState = {
  isOpen: false,
  modalType: EFormTypes.SignIn,
};

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    signInType: (state) => {
      state.modalType = EFormTypes.SignIn;
    },
    signUpType: (state) => {
      state.modalType = EFormTypes.SignUp;
    },
  },
});

export const { openModal, closeModal, signInType, signUpType } = modalSlice.actions;

export default modalSlice.reducer;
