import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { MOBILE_ROUTES } from '../constants/mobileRoutes';

const MobileRoutes = () => {
  const routeComponents = MOBILE_ROUTES.map(({path, element}, key) => 
    <Route path={path} element={element} key={key} />);

  return (
    <Router>
      <Routes>
        {routeComponents}
      </Routes>

    </Router>
  );
};

export default MobileRoutes;
