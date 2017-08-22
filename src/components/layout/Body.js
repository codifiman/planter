// Body
import React from 'react';

import { GeneratorControls, PagePreview } from '../generator';
import { body, appDrawer, content } from './layout.scss';

export const Body = () => (
  <div className={body}>
    <div className={appDrawer}>
      <GeneratorControls />
    </div>
    <div className={content}>
      <PagePreview />
    </div>
  </div>
);
