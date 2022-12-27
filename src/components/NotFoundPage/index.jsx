import React from 'react';
import {Link} from 'react-router-dom';

import ErrorMessage from '../ErrorMessage';

const NotFoundPage = () => {

  return (
    <div className='page-404'>
      <ErrorMessage />

      <Link to='/'>
        <button>Go to home page</button>
      </Link>
    </div>
  )
}

export default NotFoundPage;
