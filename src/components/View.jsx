import React from 'react';
import Radium, { StyleRoot } from 'radium';

class View extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    style: React.PropTypes.object,
  };

  render() {
    return (
      <StyleRoot>
        <div style={this.props.style}>{this.props.children}</div>
      </StyleRoot>
    );
  }
}

export default Radium(View); // eslint-disable-line new-cap
