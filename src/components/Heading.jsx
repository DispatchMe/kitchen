import React from 'react';
import Styles from '../styles';

export default class Heading extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    style: React.PropTypes.object,
  };

  static baseStyles = {
    marginBottom: Styles.padding.default,
    fontSize: `${36 / 14}rem`,
    fontWeight: Styles.font.weight.light,
    color: Styles.font.color.primary,
  };

  render() {
    return (
      <div style={Object.assign({}, Heading.baseStyles, this.props.style)}>{this.props.children}</div>
    );
  }
}
