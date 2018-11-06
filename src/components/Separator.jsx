import Radium from 'radium';
import React from 'react';
import PropTypes from 'prop-types';

class Separator extends React.Component {
  static propTypes = {
    orientation: PropTypes.string,
    style: PropTypes.object,
  };

  static baseStyles = {
    flex: 1,
  };

  static horizontalStyles = {
    maxWidth: '1px',
    borderTop: '1px solid',
  };

  static verticalStyles = {
    maxWidth: '1px',
    borderLeft: '1px solid',
  };

  render() {
    let style = {};

    if (this.props.orientation === 'vertical') {
      style = Object.assign({}, Separator.baseStyles, Separator.verticalStyles, this.props.style);
    } else if (this.props.orientation === 'horizontal') {
      style = Object.assign({}, Separator.baseStyles, Separator.horizontalStyles, this.props.style);
    } else {
      style = Object.assign({}, Separator.baseStyles, this.props.style);
    }

    return (
      <div style={style}></div>
    );
  }
}

export default Radium(Separator); // eslint-disable-line new-cap
