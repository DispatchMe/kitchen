import React from 'react';
import Radium from 'radium';
import Styles from '../styles';

class Section extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    dark: React.PropTypes.bool,
  };

  static baseStyles = {
    padding: Styles.padding.default,
    borderBottom: '1px solid',
    borderColor: Styles.color.grey80,
  };

  static darkStyles = Object.assign({
    background: Styles.color.grey97,
  }, Section.baseStyles);

  render() {
    return (
      <div style={this.props.dark && Section.darkStyles}>{this.props.children}</div>
    );
  }
}

export default Section = Radium(Section); // eslint-disable-line new-cap
