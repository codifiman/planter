// Select
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import clickOutside from 'react-click-outside';

import { Input } from './Input';
import * as classes from './select.scss';

class SelectBox extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };

    this.toggleSelect = this.toggleSelect.bind(this);
  }

  get optionClasses() {
    return classnames({
      [classes.options]: true,
      [classes.open]: this.state.open
    });
  }

  toggleSelect() {
    this.setState({open: !this.state.open});
  }

  closeSelect() {
    this.setState({ open: false });
  }

  handleClickOutside() {
    if (this.state.open === true) {
      this.closeSelect();
    }
  }

  handleOptionSelect(option) {
    const { input } = this.props;

    input.onChange(option.value)
    this.closeSelect();
  }

  render() {
    const { input, options } = this.props;

    return (
      <div className={classes.selectBox} >
        <div className={classes.valueContainer} onClick={this.toggleSelect}>
          <div>
            {input.value}
          </div>
          <div className={classes.arrow} />
        </div>
        <div className={this.optionClasses}>
          {options.map((o) => (
            <div key={o.value} onClick={() => this.handleOptionSelect(o)}>
              <div>
                {o.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
};

const SelectWithClickOutside = clickOutside(SelectBox);

SelectBox.propTypes = {
  input: PropTypes.shape({
    value: PropTypes.any,
    onChange: PropTypes.func.isRequired
  }),
}

export const Select = ({ label, ...rest }) => (
  <Input label={label}>
    <SelectWithClickOutside {...rest} />
  </Input>
);

Select.propTypes = {
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
  })).isRequired
}
