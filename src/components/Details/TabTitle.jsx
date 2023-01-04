import React from 'react';
import cls from 'classnames';

import PushPinIcon from '@mui/icons-material/PushPin';

const TabTitle = ({ label, handleSelectTab, selected }) => {

  return (
    <li className={cls(selected ? 'selected' : 'not-selected')}>
      <div className="tab-title" onClick={handleSelectTab}>
        {label}
        <PushPinIcon />
      </div>
    </li>
  );
};

export default TabTitle;
