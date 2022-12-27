import React, { useState, useRef, useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Modal from '@mui/material/Modal';

import SignIn from '../SignIn';
import SignUp from '../SignUp';
import Snackbar from '../SnackBar';

import { closeModal, signInType } from '../../store/reducers/modal/modalSlice';
import { login, setUserAuth } from '../../store/reducers/authorization/userSlice';
import { getModal, getModalTypeSelector } from '../../store/reducers/modal/selectors';
import { getUsersSelector } from '../../store/reducers/authorization/selectors';

import { EFormTypes } from '../../types';

import './modal.scss';

export default function BasicModal() {
  const dispatch = useDispatch();

  const [existingEmail, setExistingEmail] = useState('');

  const [openSnackbar, setOpenSnackbar] = useState(false);

  const [inputsState, setInputsState] = useState({ 
    email: '', 
    password: ''
  });

  const inputEl = useRef(null);

  const { isOpen } = useSelector(getModal);

  const users = useSelector(getUsersSelector);

  const modalTypeForm = useSelector(getModalTypeSelector);

  const handleCloseModal = useCallback(() => {
    dispatch(closeModal());
    dispatch(signInType());
  }, [dispatch])

  const handleSubmitForm = useCallback((e) => {
    e.preventDefault();

    const existingEmail = users.find((i) => i.email === inputsState.email);

    if(!existingEmail) {
      return setExistingEmail('Sign up, please');
    }
    if(!(existingEmail.password === inputsState.password)) {
      return setExistingEmail('Invalid password');
    }
    setExistingEmail('');
    setOpenSnackbar(true);

    dispatch(login({
      email: inputsState.email,
      password: inputsState.password,
      loggedIn: true,
    }));

    dispatch(setUserAuth(inputsState.email));
  }, [dispatch, inputsState.email, inputsState.password, users]);

  useEffect(() => {
    const keyDownHandler = (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();

        handleSubmitForm(e);
      }
    };

    document.addEventListener('keydown', keyDownHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
    };
  }, [handleSubmitForm]);

  const updateField = useCallback((e) => {
    setInputsState({
      ...inputsState,
      [e.target.name]: e.target.value
    });
  }, [inputsState]);

  const handleFocusOnInput = useCallback(() => {
    if (inputEl.current != null) {
      inputEl.current.focus();
    }
  }, []);

  return (
    <>
      <Modal
        open={isOpen}
        aria-describedby="modal-modal-description"
        onClose={handleCloseModal}
        onSubmit={handleSubmitForm}
      >
        {
          modalTypeForm === EFormTypes.SignIn
          ? (
          <>
            <SignIn 
              handleFocusOnInput={handleFocusOnInput}
              onSubmit={handleSubmitForm}
              updateField={updateField}
              email={inputsState.email}
              inputEl={inputEl}
              password={inputsState.password}
              existingEmail={existingEmail}
              />
            <Snackbar 
              openSnackbar={openSnackbar}
              setOpenSnackbar={setOpenSnackbar}
            />
          </>
          )
          : 
          <SignUp />
        }
      </Modal>
    </>
  );
}
