import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../styles';

export default class SearchField extends React.Component {
  static propTypes = {
    disabled: PropTypes.bool,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onInput: PropTypes.func,
    placeholder: PropTypes.string,
    value: PropTypes.string,
  };

  static inputBaseStyles = {
    height: Styles.layout.header.height,
    width: '100%',
    padding: `${Styles.padding.half} ${Styles.padding.default}`,
    fontSize: Styles.font.size.base,
    color: Styles.font.color.primary,
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
          disabled={this.props.disabled ? 'disabled' : ''} style={SearchField.inputBaseStyles}
        />
      </div>
    );
  }
}
