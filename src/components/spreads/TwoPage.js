//TwoPage
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';

import { sizeMap } from 'constants/sizes';

import { twopage } from './page.scss';

const getStyle = ({ width, height, style }) => ({
  ...style,
  width: `${width}in`,
  height: `${height}in`
});

export let TwoPage = ({ children, ...rest }) => (
  <div className={twopage} style={getStyle(rest)}>
    { children }
  </div>
);

TwoPage.propTypes = {
  style: PropTypes.object
};

const selector = formValueSelector('generator');

const mapState = (state) => {
  const size = selector(state, 'size');

  return {
    width: 2 * sizeMap[size].width,
    height: sizeMap[size].height,
  };
};

TwoPage = connect(mapState)(TwoPage);
