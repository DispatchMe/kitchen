import Radium from 'radium';
import React from 'react';
import Styles from '../styles';

class ButtonBarItem extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    style: React.PropTypes.object,
    icon: React.PropTypes.string,
    text: React.PropTypes.string,
    click: React.PropTypes.func,
    card: React.PropTypes.bool,
  };

  static style = {
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

  static containerStyle = {
    base: {
      height: '100%',
      transition: 'all 200ms ease-out',
    },
    card: {
      background: Styles.color.white,
      borderRadius: Styles.border.radius,
      boxShadow: '0 0 2px rgba(0, 0, 0, 0.25)',
    },
  };

  static contentStyle = {
    position: 'relative',
    top: '50%',
    transform: 'translateY(-50%)',
  };

  static svgStyle = {
    width: '100%',
    height: '2.5rem',
  };

  static labelStyle = {
    marginTop: '0.42857143rem',
  };

  constructor(props) {
    super(props);
    this.click = this.props.click || (() => {});

    this.click = this.click.bind(this);
    this.mouseEnter = this.mouseEnter.bind(this);
    this.mouseLeave = this.mouseLeave.bind(this);
  }

  mouseEnter() {
    this.setState({ hover: true });
  }

  mouseLeave() {
    this.setState({ hover: false });
  }

  render() {
    return (
      <button onClick={this.click} onMouseEnter={this.mouseEnter} onMouseLeave={this.mouseLeave} style={Object.assign({}, ButtonBarItem.style, this.props.style)}>
        <div style={Object.assign({}, ButtonBarItem.containerStyle.base, (this.props.card ? ButtonBarItem.containerStyle.card : {}))}>
          <div style={ButtonBarItem.contentStyle}>
            <div style={ButtonBarItem.labelStyle}>{this.props.text}</div>
          </div>
        </div>
      </button>
    );
  }
}

export default Radium(ButtonBarItem); // eslint-disable-line new-cap
