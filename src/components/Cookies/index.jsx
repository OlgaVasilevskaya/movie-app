import React, { useState, useCallback } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CookieIcon from '@mui/icons-material/Cookie';
import { keyframes } from '@emotion/react';

import useStyles from './styles';

const wrapperAnimation = keyframes({
  from: {
    left: '-15%'
  },
  to:{
    left: '25%'
}});

const style = {
  position: 'fixed',
  minWidth: '18%',
  minHeight: '20%',
  textAlign: 'center',
  borderRadius: '10px',
  color: '#ffffff',
  top: '70%',
  left: '-35%',
  transform: 'translate(-95%, -50%)',
  width: 'auto',
  bgcolor: '#794be6',
  boxShadow: 24,
  p: 3,
  animation: `${wrapperAnimation} 2s forwards`,
  animationDelay: '5s',
};

const COOKIES = 'cookies';

export default function Cookies() {
  const classes = useStyles();

  const [isShown, setIsShown] = useState(true);

  const isAcceptedAction = localStorage.getItem(COOKIES);

  const handleAccept = useCallback(() => () => {
    localStorage.setItem(COOKIES, 'accepted');

    setIsShown(false);
  }, []);

  const handleCancel = () => {
    setIsShown(false);
  }

  if(isAcceptedAction) {
    return null;
  }

  return (
    <div>
      {isShown && <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          <CookieIcon />
          Cookies.CookieUse
        </Typography>

        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Cookies.AcceptCookies
        </Typography>

        <Button 
          variant="outlined" 
          onClick={handleCancel}
          className={classes.buttonCancel}
        >
          Cancel
        </Button>

        <Button 
          variant="contained" 
          onClick={handleAccept()}
          className={classes.buttonAccept}
        >
        Accept
        </Button>
      </Box>}
    </div>
  );
}
