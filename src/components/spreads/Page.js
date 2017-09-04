//Page
import React from 'react';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { sizeMap } from 'constants/sizes';

import { page } from './page.scss';

const getStyle = (width, height) => ({
  width: `${width}in`,
  height: `${height}in`
});

export let Page = ({ children, width, height }) => (
  <div className={page} style={getStyle(width, height)}>
    { children }
  </div>
);

const selector = formValueSelector('generator');

const mapState = (state) => {
  const size = selector(state, 'size');

  return {
    width: sizeMap[size].width,
    height: sizeMap[size].height,
  };
};

Page = connect(mapState)(Page);
