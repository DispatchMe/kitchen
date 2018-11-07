import radium from 'radium';
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SearchField extends Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    placeholder: PropTypes.string,
    style: PropTypes.object,
    value: PropTypes.string,
  };

  static defaultProps = {
    onBlur: () => {},
    onChange: () => {},
    onInput: () => {},
  };

  static exampleProps = {
    placeholder: 'Type to search',
  };

  static containerStyles = {
    position: 'relative',
  };

  static inputStyles = {
    height: '60px',
    width: '100%',
    padding: '0.75rem 1.5rem',
    fontSize: '1rem',
    color: '#4A4A4A',
    borderTop: 'none',
    borderBottom: '1px solid #e1e1e1',
    borderLeft: 'none',
    borderRight: 'none',
    borderRadius: '0',
  };

  onBlur = (event) => {
    const { onBlur } = this.props;

    onBlur(event, event.target.value);
  };

  onChange = (event) => {
    const { onChange } = this.props;

    onChange(event, event.target.value);
  };

  onInput = (event) => {
    const { onInput } = this.props;

    onInput(event, event.target.value);
  };

  render() {
    const { disabled, placeholder, style, value } = this.props;

    return (
      <div style={[SearchField.containerStyles, style]}>
        <input
          type="search"
          value={value}
          placeholder={placeholder}
          onBlur={this.onBlur}
          onChange={this.onChange}
          onInput={this.onInput}
          disabled={disabled ? 'disabled' : ''}
          style={SearchField.inputStyles}
        />
      </div>
    );
  }
}

export default radium(SearchField);
