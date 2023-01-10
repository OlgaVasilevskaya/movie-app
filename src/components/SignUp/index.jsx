import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

import { signup } from '../../store/reducers/authorization/userSlice';
import { signInType } from '../../store/reducers/modal/modalSlice';

import { regEmail, regPhone } from '../../services/validationValue';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 200,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SignUp = React.forwardRef((props, ref) => {
  const dispatch = useDispatch();

  const [formError, setFormError] = useState('');

  const [isSignUp, setIsSignUp] = useState('');

  const [inputsState, setInputsState] = useState({ 
    email: '', 
    firstName: '',
    lastName: '',
    phone: '',
    password: '',
    repeatPassword: '',
  });

  const handleSignUp =(e) => {
    e.preventDefault();

    const resultEmail = regEmail.test(inputsState.email);
    const resultPhone = regPhone.test(inputsState.phone);

    if(!resultEmail || !resultPhone || !(inputsState.password === inputsState.repeatPassword)) {
      return setFormError('Incorrect data');
    } else {
      setFormError('');
      setIsSignUp('You are successfully registered');
    }

    dispatch(signup({
      email: inputsState.email,
      firstName: inputsState.firstName,
      lastName: inputsState.lastName,
      phone: inputsState.phone,
      password: inputsState.password,
      repeatPassword: inputsState.repeatPassword,
    }));
  };

  const updateField = useCallback((e) => {
    setInputsState({
      ...inputsState,
      [e.target.name]: e.target.value,
    });
  }, [inputsState]);

  return (
    <>
      <Box sx={style}>
        <h2>Sign up</h2>
        <Typography id="modal-modal-description" sx={{ mt: 2 }} component="span">
          <TextField 
            onChange={updateField}
            value={inputsState.email}
            name="email"
            id="outlined-basic3"
            label="Email" 
            variant="outlined"
            type="text"
            margin="dense"
          />

          <TextField 
            onChange={updateField}
            value={inputsState.firstName}
            name="firstName"
            id="outlined-basic4"
            label="First Name"
            variant="outlined"
            type="text"
            margin="dense"
          />

          <TextField 
            onChange={updateField}
            value={inputsState.lastName}
            name="lastName"
            id="outlined-basic5"
            label="Last Name"
            variant="outlined"
            type="text"
            margin="dense"
          />

          <TextField 
            onChange={updateField}
            value={inputsState.phone}
            name="phone"
            id="outlined-basic6"
            label="Phone"
            variant="outlined"
            type="text"
            margin="dense"
          />

          <TextField 
            onChange={updateField}
            value={inputsState.password}
            name="password"
            id="outlined-basic7"
            label="Password"
            variant="outlined"
            type="password"
            margin="dense"
          />

          <TextField 
            onChange={updateField}
            value={inputsState.repeatPassword}
            name="repeatPassword"
            id="outlined-basic8"
            label="Repeat Password"
            variant="outlined"
            type="password"
            margin="dense"
          />
        </Typography>

        <footer className="modal-footer">
          <div className="form-error">{formError}</div>
          <div>{isSignUp}</div>

          <button 
            onClick={handleSignUp} 
            className="submit" 
            disabled={(
              !inputsState.email,
              !inputsState.firstName,
              !inputsState.lastName,
              !inputsState.phone,
              !inputsState.password,
              !inputsState.repeatPassword
            )}
          >
            Sign up
          </button>

          <button onClick={() => dispatch(signInType())} className="submit">
            Go to sign in
          </button>
        </footer>
      </Box>
    </>
  );
});

export default SignUp;
