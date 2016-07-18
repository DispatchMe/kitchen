import radium from 'radium';
import React, { Component, PropTypes } from 'react';

class View extends Component {
  static propTypes = {
    children: PropTypes.any,
    style: PropTypes.object,
  };

  render() {
    const { children, style } = this.props;

    return (
      <div style={style}>{children}</div>
    );
  }
}

export default radium(View);
