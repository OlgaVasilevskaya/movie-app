import React, { useState, useEffect, useCallback } from 'react';

import ExpandLessIcon from '@mui/icons-material/ExpandLess';

import { useGoUp } from '../../hooks/useGoUp';

import './scroll-up.scss';

const ScrollUp = () => {
  const [isBtnShown, setIsBtnShown] = useState(false);

  const position = useGoUp();

  useEffect(() => {
    if(position > 400) {
      setIsBtnShown(true);
    } else {
      setIsBtnShown(false);
    }
  }, [position]);

  const handleScrollUp = useCallback(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div className="top-btm">
      {isBtnShown && (
        <div className="icon" onClick={handleScrollUp}>
          <ExpandLessIcon />
        </div>
      )}
    </div>
  );
};

export default ScrollUp;
