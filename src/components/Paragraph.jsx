import React from 'react';
import Styles from '../styles';

export default class Paragraph extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    style: React.PropTypes.object,
  };

  static baseStyles = {
    marginTop: Styles.padding.half,
    marginBottom: Styles.padding.half,
    fontWeight: Styles.font.weight.light,
    color: '#969799',
  };

  render() {
    return (
      <p style={Object.assign({}, Paragraph.baseStyles, this.props.style)}>{this.props.children}</p>
    );
  }
}
