import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Header from '../components/Header';
import ScrollUp from '../components/ScrollUp';
import Modal from '../components/Modal';
import MobileRoutes from './MobileRoutes';

import { useMobileScreenMatch } from '../hooks/useMobileScreenMatch';

import { ROUTES } from '../constants/routes';

const AppRoutes = () => {
  const routeComponents = ROUTES.map(({path, element}, key) => 
    <Route path={path} element={element} key={key} />);

  const isMobile = useMobileScreenMatch();

  if(isMobile) {
    return <MobileRoutes />
  }

  return (
  <Router>
    <Header />
    <ScrollUp />

    <Routes>
      {routeComponents}
    </Routes>

    <Modal />
  </Router>
)}

export default AppRoutes;
