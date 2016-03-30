import React from 'react';
import Styles from '../styles';

const consoleValue = {
  marginBottom: Styles.padding.half,
  fontSize: Styles.font.size.base,
  color: '#969799',
};

export default class Message extends React.Component {
  static propTypes = {
    details: React.PropTypes.object,
    title: React.PropTypes.string,
  };

  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    console.log(this.props.details);
  }

  render() {
    return (
      <span onClick={this.onClick} style={consoleValue}>{this.props.title}</span>
    );
  }
}
