import React from 'react';

import Button from '../Templates/Button';
import Time from '../Templates/Time';

import { IDetailsElementsProps } from '../../types';

import './detailsElements.scss';

const Detail = (props: IDetailsElementsProps) => {
  const { detail } = props;

  const { name, annotation, posterLink } = detail;

  return (
    <div className="detail-wrapper">
      <img src={posterLink} alt="poster" className="detail-poster" />

      <div className="detail-descr">
        {props.children}
        <div className="details-title">{name}</div>

        <div className="details-annotation">{annotation}</div>
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

        <Time />
      </div>
    </div>
  );
};

export default Detail;
