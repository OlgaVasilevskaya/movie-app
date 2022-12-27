import React from 'react';

import withButton from '../HOCs/withButton';

import { IButtonProps } from '../../types';

import './button.scss';

const BacicButton = (props: IButtonProps) => (
  <button className='buy-button'>
    {props.name}
  </button>
);

export default withButton(BacicButton);
