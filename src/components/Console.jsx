import React from 'react';
import Styles from '../styles';
import Message from './Message.jsx';

export default class Console extends React.Component {
  static propTypes = {
    messages: React.PropTypes.arrayOf(React.PropTypes.object),
    style: React.PropTypes.object,
  };

  static labelStyles = {
    fontSize: Styles.font.size.small,
    fontWeight: Styles.font.weight.boldSemi,
    color: Styles.color.grey37,
  };

  renderMessages() {
    const messagesToShow = this.props.messages.slice(0, 5);

    return messagesToShow.map((message, index) => (
      <tr key={index}>
        <td>
          <Message {...message} key={index} />
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div>
        <span style={Console.labelStyles}>CONSOLE</span>
        <table>
          <tbody>
            {this.renderMessages()}
          </tbody>
        </table>
      </div>
    );
  }
}
