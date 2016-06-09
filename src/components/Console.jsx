import React from 'react';
import Styles from '../styles';
import Message from './Message';

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

  static sublabelStyles = {
    color: Styles.color.grey37,
    fontSize: Styles.font.size.smallest,
    fontStyle: 'italic',
    marginBottom: '10px',
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
        <div style={Console.labelStyles}>CONSOLE</div>
        <div style={Console.sublabelStyles}>Click a line to see all the arguments in the browser console</div>
        <table>
          <tbody>
            {this.renderMessages()}
          </tbody>
        </table>
      </div>
    );
  }
}
