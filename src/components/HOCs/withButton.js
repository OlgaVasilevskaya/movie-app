import React, { useEffect } from 'react';

const withButton = OriginalComponent => props => {
  useEffect(() => {
    console.log('first render!');
  }, [])

  return <OriginalComponent {...props} />;
};

export default withButton;
