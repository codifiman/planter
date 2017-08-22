// GeneratorControls
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Zoom } from './Zoom';
import { RadioGroup, Select, Switch } from 'components/inputs';
import { WIDE, sizes } from 'constants/sizes';
import { BROWN, colors } from 'constants/colors';
import { VERTICAL, directions } from 'constants/directions';

import { generatePlanner } from 'store/planner';

import { generator, planterinputs, zoom } from './generator.scss';

const initialValues = {
  size:  WIDE.label,
  dated: true,
  color: BROWN.label,
  zoom:  0.5,
  direction: VERTICAL.value,
};

const sizeOptions = sizes.map(({ label, width, height }) => ({
  label,
  value: label
}));

const colorOptions = colors.map(({ label }) => ({
  label,
  value: label
}));

const GeneratorForm = () => (
  <form onSubmit={generatePlanner} className={generator}>
    <div className={planterinputs}>
      <Field
        label='Size'
        name='size'
        component={Select}
        options={sizeOptions}
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
      <Field
        label='Direction'
        name='direction'
        component={RadioGroup}
        options={directions}
      />
    </div>
    <div className={zoom}>
      <Field
        name='zoom'
        component={Zoom}
      />
    </div>
  </form>
);

export const GeneratorControls = reduxForm({
  initialValues,
  form: 'generator',
  destroyOnUnmount: false
})(GeneratorForm);
