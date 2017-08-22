// Switch
import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';

import { Input, HORIZONTAL } from './Input';

import { on, outer, _switch, toggle } from './switch.scss';
const getClasses = (value) => (
  classnames({
    [ on ]: value,
  }, _switch)
);

const handleClick = (input) => (
  input.onChange(!input.value)
);

export const Switch = ({ label, input }) => (
  <Input label={label} alignment={HORIZONTAL}>
    <div onClick={()=>handleClick(input)} className={outer}>
      <div className={getClasses(input.value)}>
        <div className={toggle}/>
      </div>
    </div>
  </Input>
);

Switch.propTypes = {
  input: PropTypes.shape({
    value:    PropTypes.bool,
    onChange: PropTypes.func.isRequired
  })
};
