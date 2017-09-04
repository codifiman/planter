//spreads/Weekly
import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { formValueSelector } from 'redux-form';
import classnames from 'classnames';
import moment from 'moment';

import { TwoPage } from './TwoPage';

import { daysOfWeek } from 'constants/spreads';
import { HORIZONTAL, VERTICAL } from 'constants/directions';
import { sizeMap } from 'constants/sizes';

import * as classes from './weekly.scss';

const weeklyClasses = ({ direction }, side) => classnames(
  classes.weekly,
  classes[direction],
  classes[side]
);

const week = daysOfWeek.map((wd) => ({
  ...wd,
  date: new moment().isoWeekday(wd.label)
}));

const leftDays = week.slice(0, 3);
const rightDays = week.slice(3, 7);

const generateFiller = (lines) => {
  const rows = [];

  for (let i=0; i < lines; i+=1) {
    rows.push(<div key={i}></div>);
  }

  return rows;
};

const getDoW = (day, size, direction) => {
  const height = size.height;
  const width = size.width;

  if (direction === HORIZONTAL.value && height < 6.75
  || direction === VERTICAL.value && width < 3) {
    return day.date.format('ddd')
  } else { return day.date.format('dddd'); }
};

const getCSSVars = (color) => ({
  '--color': `var(--${color})`,
});

const Header = ({ dated }) => (
  <div className={classes.header}>
    <div className={classes.filler}>{generateFiller(10)}</div>
  </div>
);

const Weekday = ({ day, size, dated, direction }) => (
  <div className={classes.weekday}>
    <div className={classes.label}>
      <h2>{getDoW(day, size, direction)}</h2>
      <h2>{ dated ? day.date.format('D') : null}</h2>
    </div>
    <div className={classes.entry}>
      <div className={classes.morning}></div>
      <div className={classes.afternoon}></div>
      <div className={classes.evening}></div>
    </div>
  </div>
);

export let Weekly = ({ color, ...rest }) => (
  <TwoPage style={getCSSVars(color)}>
    <div className={classes.page}>
      <div
        className={weeklyClasses(rest, 'left')}
      >
        <Header {...rest } />
        {leftDays.map((day) =>
          <Weekday
            day={day}
            {...rest}
            key={day.label}
          />
        )}
      </div>
    </div>
    <div className={classes.page}>
      <div className={weeklyClasses(rest, 'right')}>
        {rightDays.map((day) =>
          <Weekday
            day={day}
            {...rest}
            key={day.label}
          />
        )}
      </div>
    </div>
  </TwoPage>
);

const selector = formValueSelector('generator');

const mapState = (state) => ({
  color:     selector(state, 'color'),
  dated:     selector(state, 'dated'),
  direction: selector(state, 'direction'),
  size:      sizeMap[selector(state, 'size')],
});

Weekly = connect(mapState)(Weekly);
