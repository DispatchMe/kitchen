import React from 'react';

export default class SearchField extends React.Component {
  static propTypes = {
    disabled: React.PropTypes.bool,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onInput: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
  };

  static baseStyles = {
    height: '60px',
    width: '100%',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    color: '#4A4A4A',
    border: 'none',
    borderBottom: '1px solid #e1e1e1',
    borderRadius: '0',
  };

  static rootStyles = {
    position: 'relative',
  };

  onBlur = (event) => {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event, event.target.value);
    }
  }

  onChange = (event) => {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event, event.target.value);
    }
  }

  onInput = (event) => {
    if (typeof this.props.onInput === 'function') {
      this.props.onInput(event, event.target.value);
    }
  }

  render() {
    return (
      <div style={SearchField.rootStyles}>
        <input type="search" value={this.props.value} placeholder={this.props.placeholder} onBlur={this.onBlur} onChange={this.onChange} onInput={this.onInput}
          disabled={this.props.disabled ? 'disabled' : ''} style={SearchField.baseStyles}
        />
      </div>
    );
  }
}
