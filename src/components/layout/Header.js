// Header
import React from 'react';
import { header, leftContent, rightContent } from './layout.scss';

import { AppDrawerToggle } from './AppDrawerToggle';

export const Header = () => (
  <div className={header}>
    <div className={leftContent}>
      <AppDrawerToggle />
    </div>
    <div className={rightContent}>
      Planter
    </div>
  </div>
);
