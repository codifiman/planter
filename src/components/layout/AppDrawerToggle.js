// AppDrawerToggle
import React, { Component } from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Field, formValueSelector, reduxForm } from 'redux-form';

import { button, toggled, trsEnter, trsLeave } from './appdrawertoggle.scss';

class Toggle extends Component {
  constructor(props) {
    super(props);
    this.state = this.newState;
    window.addEventListener('resize', this.setVisibility.bind(this));
  }

  get newState() {
    if (window.innerWidth < 600) {
      return { visible: true };
    }

    else {
      return { visible: false }
    }
  }

  setVisibility() {
    if (this.newState.visible != this.state.visible) {
      this.setState(this.newState);
    }

    if (!this.newState.visible) {
      const { input } = this.props;

      input.onChange(false);
    }
  }

  get classes() {
    const { input: { value } } = this.props;

    return classnames({
      [ toggled ]: value
    }, button);
  }

  render() {
    const { input } = this.props;

    return (
      <ReactCSSTransitionGroup
        transitionName={{
          enter:       trsEnter,
          leave:       trsLeave,
        }}
        transitionEnterTimeout={200}
        transitionLeaveTimeout={200}>
        {
          this.state.visible
          ? <div
              onClick={() => input.onChange(!input.value) }
              className={this.classes}
            >
              <div/><div/><div/>
            </div>
          : null
        }
      </ReactCSSTransitionGroup>
    );
  }
};

Toggle.propTypes = {
  input: PropTypes.shape({
    onChange: PropTypes.func.isRequired,
    value:    PropTypes.bool
  })
};

const ADToggle = ({ input, toggled }) => (
  <Field
    component={Toggle}
    name='toggled'
  />
);

export const AppDrawerToggle = reduxForm({
  form: 'appdrawer',
  initialValues: {
    toggled: false,
  },
})(ADToggle);
