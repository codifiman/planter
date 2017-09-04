// PreviewControls
import React from 'react';
import { Field, reduxForm } from 'redux-form';

import { Zoom } from './Zoom';
import { Select } from 'components/inputs';

import { WEEKLY, spreads } from 'constants/spreads';

import { previewcontrols, zoom } from './previewcontrols.scss';

const initialValues = {
  spread: WEEKLY.label,
  zoom: 0.5
};

const spreadOptions = spreads.map(({ label }) => ({
  label,
  value: label
}));

const PControls = () => (
  <form className={previewcontrols}>
    <label>Preview</label>
    <Field
      label='Spread'
      name='spread'
      component={Select}
      options={spreadOptions}
    />
    <div className={zoom}>
            <Field
        name='zoom'
        component={Zoom}
      />
    </div>
  </form>
);

export const PreviewControls = reduxForm({
  initialValues,
  form: 'preview',
  destroyOnUnmount: false
})(PControls);


