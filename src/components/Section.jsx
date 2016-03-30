import React from 'react';
import Radium from 'radium';
import Styles from '../styles';

const style = {
  base: {
    padding: Styles.padding.default,
    borderBottom: '1px solid',
    borderColor: Styles.color.grey80,
  },
  dark: {
    background: Styles.color.grey97,
  },
};

class Section extends React.Component {
  static propTypes = {
    children: React.PropTypes.any,
    dark: React.PropTypes.bool,
  };

  render() {
    return (
      <div style={[style.base, this.props.dark && style.dark]}>{this.props.children}</div>
    );
  }
}

export default Section = Radium(Section); // eslint-disable-line new-cap
