import { createSelector } from '@reduxjs/toolkit';

export const getModal = state => state.modal;

export const getModalTypeSelector = createSelector(
  getModal, info => info.modalType
);
