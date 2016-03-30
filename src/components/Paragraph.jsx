import React from 'react';
import Styles from '../styles';

const style = {
  base: {
    marginTop: Styles.padding.half,
    marginBottom: Styles.padding.half,
    fontWeight: Styles.font.weight.light,
    color: '#969799',
  },
};

export default class Paragraph extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    style: React.PropTypes.object,
  };

  render() {
    return (
      <p style={Object.assign({}, style.base, this.props.style)}>{this.props.children}</p>
    );
  }
}
