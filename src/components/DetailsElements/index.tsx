import React, { useMemo } from 'react';

import cls from 'classnames';

import Button from '../Button';

import { IDetailsElementsProps } from '../../types';

import './detailsElements.scss';

const Detail = (props: IDetailsElementsProps) => {
  const { detail } = props;

  const { name, annotation, posterLink } = detail;

  const getWeekDay = (date: Date) => {
    const days: Array<string> = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return days[date.getDay()];
  }

  const currentDay = getWeekDay(new Date());

  const memoizedValue = useMemo(() => (currentDay === 'Sat'), [currentDay]);

  return (
    <div className='detail-wrapper'>
      <img src={posterLink} alt="poster" className="detail-poster" />

      <div className="detail-descr">
        {props.children}
        <div className='details-title'>{name}</div>

        <div className='details-annotation'>{annotation}</div>
      </div>

      <div className="details-info">
        <p>Choose cinema</p>

        <select>
          <option value="ArenaCity">Arena City</option>
          <option value="VokaCINEMA">VOKA CINEMA</option>
        </select>

        <p>Choose date</p>
        <input type="date" />

        <p>Choose time</p>
        <input type="time" />

        <Button name="Click button" />

        <div className={cls('hide-offer', {
          'show-offer': memoizedValue,
        })}>
          Click and get a super offer
        </div>
      </div>
    </div>
  )
}

export default Detail;
