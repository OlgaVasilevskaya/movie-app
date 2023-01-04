import { useState, useEffect } from 'react';

const useMobileScreenMatch = () => {
  // eslint-disable-next-line no-unused-vars
  const [windowSize, setWindowSize] = useState({
    width: '',
    height: '',
  });

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    if(window.innerWidth >= 640 && window.innerHeight >= 1200) {
      setIsMobile(true);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

export {useMobileScreenMatch};
