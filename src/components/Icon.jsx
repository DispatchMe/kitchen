import React from 'react';
import Radium from 'radium';

export default class Icon extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    onClick: React.PropTypes.func,
    style: React.PropTypes.object,
    icon: React.PropTypes.func,
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
