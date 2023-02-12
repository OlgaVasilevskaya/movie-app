import React from 'react';

import Cookies from 'components/Cookies';
import Movies from 'components/Movies';

import './main.scss';

const Main = () => (
  <div className="wrapper">
    <Cookies />

    <Movies />
  </div>
);

export default Main;
