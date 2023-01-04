import { createUseStyles } from 'react-jss';

const useStyles = createUseStyles({
  buttonCancel: {
    margin: '8px',
    color: '#000000',
    backgroundColor: '#ffffff',
    '&:hover': {
      background: '#e3e8f1cb',
    },
  },

  buttonAccept: {
    color: '#ffffff',
    backgroundColor: '#4a3fac',
  },
});

export default useStyles;
