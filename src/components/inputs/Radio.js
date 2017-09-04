//inputs/Radio
import React from 'react';
import PropTypes from 'prop-types';

import { Input } from './Input';

import { radio, radiogroup } from './radio.scss';

const Radio = ({ value, label, disabled, input }) => (
  <div className={radio}>
    <input
      type='radio'
      name={input.name}
      id={`${input.name}-${value}`}
      value={value}
      checked={value === input.value}
      onChange={() => input.onChange(value)}
      disabled={disabled}
    />
    <label htmlFor={`${input.name}-${value}`}>{label}</label>
  </div>
);

export const RadioGroup = ({ label, options, input }) => (
  <Input label={label}>
    <div className={radiogroup}>
      {options.map((v) => <Radio {...v} input={input} key={v.value} />)}
    </div>
  </Input>
);

RadioGroup.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    value: PropTypes.any.isRequired,
    label: PropTypes.string.isRequired,
  })).isRequired,
  input: PropTypes.shape({
    value:    PropTypes.any,
    onChange: PropTypes.func.isRequired,
    name:     PropTypes.string.isRequired
  }).isRequired,
};
