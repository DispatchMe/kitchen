import React from 'react';
import Styles from '../styles';
import ButtonBarItem from './ButtonBarItem';

export default class ButtonBar extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    style: React.PropTypes.object,
    items: React.PropTypes.array,
  };

  static baseStyles = {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    height: '100%',
    width: '7rem',
    background: Styles.color.grey97,
  };

  renderButtonBarItems() {
    const items = this.props.items || [];

    return items.map(item => (<ButtonBarItem key={item.icon} icon={item.icon} text={item.text} click={item.click} card={!!item.card} />));
  }

  render() {
    return (
      <div style={Object.assign({}, ButtonBar.baseStyles, this.props.style)}>
        {this.renderButtonBarItems()}
      </div>
    );
  }
}
