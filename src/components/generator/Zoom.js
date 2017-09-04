// Zoom
import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'react-fa';

import { reset, zoom, zoom_in, zoom_out, zoom_pct } from './zoom.scss';


const changeZoom = (ev, input, modifier) => {
  ev.preventDefault();
  input.onChange(input.value + modifier);
}

export const Zoom = ({ input }) => (
  <div className={zoom}>
    <div className={zoom_pct}>
      {`${(input.value * 100).toFixed(0)}%`}
    </div>
    <button
      className={zoom_in}
      onClick={(e) => changeZoom(e, input, 0.1)}
      disabled={input.value >= 2}
    />
    <button
      className={zoom_out}
      onClick={(e) => changeZoom(e, input, -0.1)}
      disabled={input.value <= 0.2}
    />
    <button
      className={reset}
      onClick={(e) => changeZoom(e, input, 0.5-input.value)}
      disabled={input.value === 0.5}
    >
      <Icon name="undo" fixedWidth/>
    </button>
  </div>
);
