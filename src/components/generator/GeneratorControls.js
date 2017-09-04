// GeneratorControls
import React from 'react';
import { connect } from 'react-redux';
import { change, Field, reduxForm, formValueSelector } from 'redux-form';
import classnames from 'classnames';

import { RadioGroup, Select, Switch } from 'components/inputs';
import { WIDE, sizes, sizeMap } from 'constants/sizes';
import { BROWN, colors } from 'constants/colors';
import { HORIZONTAL, VERTICAL, directions } from 'constants/directions';

import { generatePlanner } from 'store/planner';

import { generator } from './generator.scss';

const initialValues = {
  size:  WIDE.label,
  dated: true,
  color: BROWN.value,
  direction: HORIZONTAL.value,
};

const sizeOptions = sizes.map(({ label, width, height }) => ({
  label: [<span key={label}>{label}</span>, <span key={width}>{`${width}" x ${height}"`}</span>],
  value: label
}));

const directionOptions = (size) => {
  const width = sizeMap[size].width;

  return [
    HORIZONTAL,
    {
      ...VERTICAL,
      disabled: width < 5
    }
  ];
};

const colorOptions = colors.map(({ label, value }) => ({ label, value }));

const GeneratorForm = ({ className, resetDirection, size }) => (
  <form onSubmit={generatePlanner} className={classnames(generator, className)}>
    <Field
      label='Size'
      name='size'
      component={Select}
      options={sizeOptions}
      onChange={resetDirection}
    />
    <Field
      label='Direction'
      name='direction'
      component={RadioGroup}
      options={directionOptions(size)}
    />
    <Field
      label='Dated'
      name='dated'
      component={Switch}
      type='text'
    />
    <Field
      label='Color'
      name='color'
      component={Select}
      options={colorOptions}
    />
  </form>
);

const selector = formValueSelector('generator');

const mapState = (state) => ({
  size: selector(state, 'size'),
});

const mapDispatch = (dispatch) => ({
  resetDirection: (ev, size) => {
    const width = sizeMap[size].width;
    if (width < 5) {
      dispatch(change('generator', 'direction', HORIZONTAL.value));
    }
  }
});

export const GeneratorControls = reduxForm({
  initialValues,
  form: 'generator',
  destroyOnUnmount: false
})(connect(mapState, mapDispatch)(GeneratorForm));
