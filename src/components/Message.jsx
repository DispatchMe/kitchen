import React from 'react';
import Styles from '../styles';

export default class Message extends React.Component {
  static propTypes = {
    details: React.PropTypes.object,
    title: React.PropTypes.string,
  };

  static messageStyles = {
    marginBottom: Styles.padding.half,
    fontSize: Styles.font.size.base,
    color: '#969799',
  };

  onClick = () => {
    console.log(this.props.details);
  }

  render() {
    return (
      <span onClick={this.onClick} style={Message.messageStyles}>{this.props.title}</span>
    );
  }
}
