import Radium from 'radium';
import React from 'react';
import Styles from '../styles';

class ButtonBarItem extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    style: React.PropTypes.object,
    icon: React.PropTypes.string,
    text: React.PropTypes.string,
    onClick: React.PropTypes.func,
    card: React.PropTypes.bool,
  };

  static baseStyles = {
    height: '7rem',
    width: '100%',
    padding: '.5rem',
    border: 'none',
    background: 'transparent',
    fontSize: `${12 / 14}rem`,
    transition: 'all 200ms ease-out',

    ':hover': {
      background: Styles.color.grey88,
    },
  };

  static containerBaseStyles = {
    height: '100%',
    transition: 'all 200ms ease-out',
  };

  static containerCardStyles = {
    background: Styles.color.white,
    borderRadius: Styles.border.radius,
    boxShadow: '0 0 2px rgba(0, 0, 0, 0.25)',
  };

  static labelStyles = {
    marginTop: '0.42857143rem',
  };

  onMouseEnter = () => {
    this.setState({ hover: true });
  }

  onMouseLeave = () => {
    this.setState({ hover: false });
  }

  render() {
    return (
      <button onClick={this.props.onClick} onMouseEnter={this.onMouseEnter} onMouseLeave={this.onMouseLeave} style={Object.assign({}, ButtonBarItem.baseStyles, this.props.style)}>
        <div style={Object.assign({}, ButtonBarItem.containerBaseStyles, (this.props.card ? ButtonBarItem.containerCardStyles : {}))}>
          <div style={ButtonBarItem.contentStyle}>
            <div style={ButtonBarItem.labelStyles}>{this.props.text}</div>
          </div>
        </div>
      </button>
    );
  }
}

export default Radium(ButtonBarItem); // eslint-disable-line new-cap
