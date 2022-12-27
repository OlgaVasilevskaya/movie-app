import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { openModal } from '../../store/reducers/modal/modalSlice';
import { logout, setUserNotAuth } from '../../store/reducers/authorization/userSlice';
import { getUserSelector } from '../../store/reducers/authorization/selectors';

import logo from '../../assets/img/video-camera.png';

import { IHeaderProps } from '../../types';

import { headerRoute } from '../../constants/routes';

import './header.scss';

const Header = (props: IHeaderProps) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector(getUserSelector);

  const handleOpenModal = useCallback(() => {
    dispatch(openModal());
  }, [dispatch])

  const handleLogout = useCallback((e:React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    dispatch(logout());
    dispatch(setUserNotAuth());
  }, [dispatch])

  const switchToProfile = useCallback(() => {
    navigate(headerRoute.user);
  }, [navigate])

  return (
    <div className='header'>
      <img src={logo} alt="logo" />

      {user
        ? (
          <div className='user-name-box'>
            {user.email}
            <AccountCircleIcon onClick={switchToProfile} />
            <button onClick={handleLogout}>
              Sign out
            </button>
          </div>)
        : 
          <button 
          className="clickme" 
          onClick={handleOpenModal}
          >
            Sign in
          </button>
      }
    </div>
  );
}

export default Header;
