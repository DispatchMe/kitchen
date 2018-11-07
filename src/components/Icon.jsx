import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Radium from 'radium';

class Icon extends Component {
  static propTypes = {
    icon: PropTypes.func,
    name: PropTypes.string,
    onClick: PropTypes.func,
    style: PropTypes.object,
    variant: PropTypes.string,
  };

  render() {
    const IconType = this.props.icon || {};

    return IconType ? (
      <IconType className="icon" {...this.props} />
    ) : (
      <span>⚠</span>
    );
  }
}

export default Radium(Icon); // eslint-disable-line new-cap
