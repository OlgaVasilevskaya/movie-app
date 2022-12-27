import React from 'react';
import { useDispatch } from 'react-redux';

import Box from '@mui/material/Box';
import { Form, Field } from 'react-final-form';

import { signUpType } from '../../store/reducers/modal/modalSlice';

import { validateForm } from '../../services/validationValue';

import Styles from '../Modal/Styles';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const SignIn = React.forwardRef((props, ref) => {
  const { 
    handleFocusOnInput, 
    onSubmit, 
    updateField, 
    email, 
    inputEl, 
    password, 
    existingEmail } = props;

  const dispatch = useDispatch();

  return (
    <>
      <Box sx={style}>
        <Styles>
          <h2 onClick={handleFocusOnInput}>Sign in</h2>
            <Form
              onSubmit={onSubmit}
              validate={validateForm}
              render={({ submitError, handleSubmit, handleSubmitForm, form, submitting, pristine, values }) => (
                <form onSubmit={handleSubmitForm}>
                  <Field name="email">
                    {({ input, meta }) => (
                      <div>
                        <label>Email</label>
                        <input {...input} 
                        type="text" 
                        placeholder="Email"
                        onChange={updateField}
                        value={email} 
                        name="email"
                        ref={inputEl}
                        />
                      </div>
                    )}
                  </Field>

                  <Field name="password">
                    {({ input, meta }) => (
                      <div>
                        <label>Password</label>
                        <input {...input} 
                        type="password"
                        placeholder="Password" 
                        onChange={updateField}
                        value={password}
                        name="password"
                        />
                      </div>
                    )}
                  </Field>

                  {submitError && <div className="error">{submitError}</div>}

                  <div className="buttons">
                    <button 
                      type="submit" 
                      disabled={submitting}
                      onClick={handleSubmitForm}
                    >
                      Sign in
                    </button>
                  </div>

                  <div>{existingEmail}</div>

                  <span>
                    Don't have an account yet? 
                    <button onClick={() => dispatch(signUpType())}>
                      Create one.
                    </button>
                  </span>
                </form>
              )}
            />
        </Styles>
      </Box>
    </>
  );
})

export default SignIn;
