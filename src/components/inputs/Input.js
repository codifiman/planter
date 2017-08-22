// Input
import React from 'react';
import { Field } from 'redux-form';
import classnames from 'classnames';

import { input, horizontal, vertical } from './input.scss';

export const HORIZONTAL = 'horizontal';
export const VERTICAL = 'vertical';

const getClasses = ({ alignment }) => classnames({
  [ horizontal ]: alignment === HORIZONTAL,
  [ vertical ]:   alignment === VERTICAL,

}, input);

export const Input = ({ children, label, alignment, ...rest }) => (
  <div className={getClasses({ alignment })}>
    <label>{label}</label>
    {children}
  </div>
);

Input.defaultProps = {
  alignment: VERTICAL
};
