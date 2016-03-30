import Radium from 'radium';
import React from 'react';

const styles = {
  base: {
    flex: 1,
  },
  vertical: {
    maxWidth: '1px',
    borderLeft: '1px solid',
  },
  horizontal: {
    maxWidth: '1px',
    borderTop: '1px solid',
  },
};

class Separator extends React.Component {
  static propTypes = {
    orientation: React.PropTypes.string,
    style: React.PropTypes.object,
  };

  render() {
    let style = {};

    if (this.props.orientation === 'vertical') {
      style = Object.assign({}, styles.base, styles.vertical, this.props.style);
    } else if (this.props.orientation === 'horizontal') {
      style = Object.assign({}, styles.base, styles.horizontal, this.props.style);
    } else {
      style = Object.assign({}, styles.base, this.props.style);
    }

    return (
      <div style={style}></div>
    );
  }
}

export default Radium(Separator); // eslint-disable-line new-cap
