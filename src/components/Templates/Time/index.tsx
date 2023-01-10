import React, { useMemo } from 'react';
import cls from 'classnames';

import { DAYS } from '../../../constants/days';

import '../../DetailsElements/detailsElements.scss';

const Time = () => {
  const getWeekDay = (date: Date) => {

    return DAYS[date.getDay()];
  };

  const currentDay = getWeekDay(new Date());

  const memoizedValue = useMemo(() => (currentDay === DAYS[2]), [currentDay]);

  return (
    <div className={cls('hide-offer', {
      'show-offer': memoizedValue,
    })}>
      Click and get a super offer
    </div>
  );
};

export default Time;
