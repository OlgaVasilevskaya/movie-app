import React, { useEffect } from 'react';

const withButton = OriginalComponent => props => {
  useEffect(() => {
    // eslint-disable-next-line no-console
    console.log('first render!');
  }, []);

  return <OriginalComponent {...props} />;
};

export default withButton;
