import radium from 'radium';
import React, { Component, PropTypes } from 'react';

class CheckmarkIcon extends Component {
  static propTypes = {
    alt: PropTypes.string,
    className: PropTypes.string,
    name: PropTypes.string,
    style: PropTypes.object,
  };

  static styles = {
    minWidth: '0.6rem',
  };

  render() {
    const { alt, className, style } = this.props;

    return (
      <svg alt={alt} className={className} style={[CheckmarkIcon.styles, style]} width="11" height="9" viewBox="0 0 11 9">
        <path fill="currentColor" fillRule="evenodd" d="M3.612 8.878L.117 5.238a.433.433 0 0 1 0-.59l1.135-1.183a.393.393 0 0 1 .568 0l1.792 1.867a.39.39 0 0 0 .567 0l5-5.21a.39.39 0 0 1 .568 0l1.134 1.182a.432.432 0 0 1 0 .592L4.178 8.878a.39.39 0 0 1-.566 0z" />
      </svg>
    );
  }
}

export default radium(CheckmarkIcon);
