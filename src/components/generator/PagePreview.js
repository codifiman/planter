// PagePreview
import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import classnames from 'classnames';

import { colorMap } from 'constants/colors';
import { sizeMap } from 'constants/sizes';

import { container, page, content } from './pagepreview.scss';

const getContainerStyle = ({ zoom }) => ({
  transform:   `scale(${zoom}, ${zoom})`,
});

const getPageStyle = ({ size }) => ({
  width:       `${sizeMap[size].width}in`,
  height:      `${sizeMap[size].height}in`,
});

const getContentStyle = ({ color }) => ({
  borderColor: colorMap[color].value,
});

const Page = ({ children, ...rest }) => (
  <div className={page} style={getPageStyle(rest)}>
    <div style={getContentStyle(rest)} className={content}>
      {children}
    </div>
  </div>

);
const PPreview = (props) => (
  <div className={container} style={getContainerStyle(props)}>
    <Page {...props} />
    <Page {...props} />
  </div>
);

const formValues = getFormValues('generator');

const mapState = (state, props) => ({
  ...formValues(state)
});

export const PagePreview = connect(mapState)(PPreview);
