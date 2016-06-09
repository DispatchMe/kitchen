import React, { Component, PropTypes } from 'react';
import radium from 'radium';
import Styles from '../styles';

class Section extends Component {
  static propTypes = {
    children: PropTypes.any,
    dark: PropTypes.bool,
    style: PropTypes.object,
  };

  static baseStyles = {
    padding: Styles.padding.default,
    borderBottom: '1px solid',
    borderColor: Styles.color.grey80,
  };

  static darkStyles = Object.assign({
    background: Styles.color.grey97,
  }, Section.baseStyles);

  render() {
    return (
      <div style={[this.props.style, this.props.dark && Section.darkStyles]}>{this.props.children}</div>
    );
  }
}

export default radium(Section);
