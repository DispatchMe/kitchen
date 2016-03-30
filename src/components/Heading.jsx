import React from 'react';
import Styles from '../styles';

const style = {
  base: {
    marginBottom: Styles.padding.default,
    fontSize: `${36 / 14}rem`,
    fontWeight: Styles.font.weight.light,
    color: Styles.font.color.primary,
  },
};

export default class Heading extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    style: React.PropTypes.object,
  };

  render() {
    return (
      <div style={Object.assign({}, style.base, this.props.style)}>{this.props.children}</div>
    );
  }
}
