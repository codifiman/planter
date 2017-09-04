// PagePreview
import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import classnames from 'classnames';

import { Weekly, Monthly } from 'components/spreads';
import { WEEKLY, MONTHLY } from 'constants/spreads';

import { container } from './pagepreview.scss';

const getContainerStyle = (zoom) => ({
  transform:   `scale(${zoom}, ${zoom})`,
});

const previewSpreads = {
  [ WEEKLY.label ]: <Weekly />,
  [ MONTHLY.label ]: <Monthly />,
};

export let PagePreview = ({ spread, zoom }) => (
  <div className={container} style={getContainerStyle(zoom)}>
    {previewSpreads[spread]}
  </div>
);

const previewValues = getFormValues('preview');

const mapState = (state, props) => ({
  ...previewValues(state)
});

PagePreview = connect(mapState)(PagePreview);
