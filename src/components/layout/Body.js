// Body
import React from 'react';
import { connect } from 'react-redux';
import { getFormValues } from 'redux-form';
import classnames from 'classnames';

import { GeneratorControls, PagePreview, PreviewControls } from '../generator';
import { body, appDrawer, content, mainDrawer, extDrawer, drawerToggled } from './layout.scss';

const getAppDrawerClasses = (isToggled) => classnames({
  [ drawerToggled ]: isToggled
}, appDrawer);

export let Body = ({ toggled }) => (
  <div className={body}>
    <div className={getAppDrawerClasses(toggled)}>
      <GeneratorControls className={mainDrawer}/>
      <PreviewControls className={extDrawer}/>
    </div>
    <div className={content}>
      <PagePreview />
    </div>
  </div>
);

const mapState = (state, props) => ({
  toggled: getFormValues('appdrawer')(state).toggled
});

Body = connect(mapState)(Body);
