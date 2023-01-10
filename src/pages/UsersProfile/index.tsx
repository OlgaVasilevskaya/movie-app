import React, { useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';

import { changeInfo } from 'store/reducers/authorization/userSlice';
import { getUserByEmailSelector } from 'store/reducers/authorization/selectors';

import profile from 'assets/img/profile.png';

import './usersProfile.scss';

const style = {
  position: 'absolute',
  top: '80%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface IInputsState {
  email?: string | number | RegExp,
  firstName?: string,
  lastName?: string,
  phone?: string | number | RegExp,
  city?: string,
  oldPassword?: number | string,
  newPassword?: number | string,
  repeatPassword?: number | string
}

const UsersProfile = () => {
  const dispatch = useDispatch();

  const [formError, setFormError] = useState<string>('');

  const user = useSelector(getUserByEmailSelector);

  const [inputsState, setInputsState] = useState<IInputsState>({ 
    email: user.email, 
    firstName: user.firstName,
    lastName: user.lastName,
    phone: user.phone,
    city: '',
    oldPassword: '',
    newPassword: '',
    repeatPassword: '',
  });

  const handleChangePassword = useCallback(() => {
    if(!(inputsState.oldPassword === user.password)) {
      setFormError('Invalid old password'); 
    } else if (!(inputsState.newPassword === inputsState.repeatPassword)) {
      setFormError('Passwords are not equal');
    } else {
      setFormError('');
      dispatch(changeInfo({
        password: inputsState.newPassword,
      }));
    }
  }, [dispatch, inputsState.newPassword, inputsState.oldPassword, inputsState.repeatPassword, user.password])

  const updateField = useCallback((e: React.ChangeEvent<HTMLInputElement>):void => {
    setInputsState({
      ...inputsState,
      [e.target.name]: e.target.value,
    });
  }, [inputsState]);

  const handleSaveChanges = useCallback(() => {
    dispatch(changeInfo({
      email: inputsState.email,
      firstName: inputsState.firstName,
      lastName: inputsState.lastName,
      phone: inputsState.phone,
      city: inputsState.city,
    }))
  }, [dispatch, inputsState.city, inputsState.email, inputsState.firstName, inputsState.lastName, inputsState.phone])

  return (
    <div className="profile">
      <Box sx={style}>
        <img className="profile-img" src={profile} alt="profile" />

        <TextField
          onChange={updateField}
          value={inputsState.email}
          id="outlined-basic1"
          label="Email"
          variant="outlined"
          type="text"
          name="email"
          margin="normal"
        />

        <TextField 
          onChange={updateField}
          value={inputsState.firstName}
          id="outlined-basic2"
          label="First name"
          variant="outlined"
          type="text"
          name="firstName"
          margin="normal"
        />

        <TextField 
          onChange={updateField}
          value={inputsState.lastName}
          id="outlined-basic3"
          label="Last name"
          variant="outlined"
          type="text"
          name="lastName"
          margin="normal"
        />

        <TextField 
          onChange={updateField}
          value={inputsState.phone}
          id="outlined-basic4"
          label="Phone"
          variant="outlined"
          type="text"
          name="phone"
          margin="normal"
        />

        <TextField 
          onChange={updateField}
          value={inputsState.city}
          id="outlined-basic6"
          label="City"
          variant="outlined"
          type="text"
          name="city"
          margin="normal"
        />

        <br/>

        <button onClick={handleSaveChanges}>Edit information</button>

        <p>Change password</p>

        <TextField 
          onChange={updateField}
          value={inputsState.oldPassword}
          id="outlined-basic8"
          label="Old password"
          variant="outlined"
          type="password"
          name="oldPassword"
          margin="normal"
        />

        <TextField 
          onChange={updateField}
          value={inputsState.newPassword}
          id="outlined-basic9"
          label="New password"
          variant="outlined"
          type="password"
          name="newPassword"
          margin="normal"
        />

        <TextField 
          onChange={updateField}
          value={inputsState.repeatPassword}
          id="outlined-basic10"
          label="Repeat password"
          variant="outlined"
          type="password"
          name="repeatPassword"
          margin="normal"
        />

        <br/>

        <button onClick={handleChangePassword}>Change password</button>

        <div>{formError}</div>
      </Box>
    </div>
  );
};

export default UsersProfile;
