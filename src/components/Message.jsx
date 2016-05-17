import React from 'react';
import Styles from '../styles';

export default class Message extends React.Component {
  static propTypes = {
    details: React.PropTypes.any,
    title: React.PropTypes.string,
  };

  static baseStyles = {
    marginBottom: Styles.padding.half,
    fontSize: Styles.font.size.base,
    color: '#969799',
  };

  onClick = () => {
    console.log(this.props.details);
  }

  render() {
    return (
      <span onClick={this.onClick} style={Message.baseStyles}>{this.props.title}</span>
    );
  }
}
