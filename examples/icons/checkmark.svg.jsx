import React from 'react';

export default class CheckmarkIcon extends React.Component {
  static propTypes = {
    alt: React.PropTypes.string,
    classes: React.PropTypes.string,
    name: React.PropTypes.string,
    style: React.PropTypes.object,
  };

  render() {
    return (
      <svg className={this.props.classes} alt={this.props.alt} width="11" height="9" viewBox="0 0 11 9" style={{ minWidth: '0.6em' }}>
        <path fill="currentColor" style={{ fillRule: 'evenodd' }} d="M3.612 8.878L.117 5.238a.433.433 0 0 1 0-.59l1.135-1.183a.393.393 0 0 1 .568 0l1.792 1.867a.39.39 0 0 0 .567 0l5-5.21a.39.39 0 0 1 .568 0l1.134 1.182a.432.432 0 0 1 0 .592L4.178 8.878a.39.39 0 0 1-.566 0z" />
      </svg>
    );
  }
}
