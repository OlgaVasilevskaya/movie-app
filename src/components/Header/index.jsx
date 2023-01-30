import React, { useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import 'services/i18n';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';

import { openModal } from 'store/reducers/modal/modalSlice';
import { logout, setUserNotAuth } from 'store/reducers/authorization/userSlice';
import { getUserEmailSelector } from 'store/reducers/authorization/selectors';

import logo from 'assets/img/video-camera.png';

import { headerRoute } from 'constants/routes';

import './header.scss';

const Header = (props) => {
  const { t, i18n } = useTranslation();

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const user = useSelector(getUserEmailSelector);

  const handleOpenModal = useCallback(() => {
    dispatch(openModal());
  }, [dispatch]);

  const handleLogout = useCallback((e) => {
    e.preventDefault();

    dispatch(logout());
    dispatch(setUserNotAuth());
  }, [dispatch]);

  const switchToProfile = useCallback(() => {
    navigate(headerRoute.user);
  }, [navigate]);

  const handleChangeLang = (e) => {
    i18n.changeLanguage(e.target.value);
  };

  return (
    <div className="header">
      <img src={logo} alt="logo" />

      <select onChange={handleChangeLang}>
        <option value="ru">Russian</option>
        <option value="en">English</option>
      </select>

      {user
        ? (
          <div className="user-name-box">
            {user}
            <AccountCircleIcon onClick={switchToProfile} />
            <button onClick={handleLogout}>
              {t('SignOut')}
            </button>
          </div>)
        : 
        <button 
          className="clickme" 
          onClick={handleOpenModal}
        >
          {t('SignIn')}
        </button>
      }
    </div>
  );
};

export default Header;
