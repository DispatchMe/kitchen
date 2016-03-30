import React from 'react';

const styles = {
  root: {
    position: 'relative',
  },
  input: {
    base: {
      height: '60px',
      width: '100%',
      padding: '0.75rem 1.5rem',
      fontSize: '1rem',
      color: '#4A4A4A',
      border: 'none',
      borderBottom: '1px solid #e1e1e1',
      borderRadius: '0',
    },
  },
};

export default class SearchField extends React.Component {
  static propTypes = {
    disabled: React.PropTypes.bool,
    onBlur: React.PropTypes.func,
    onChange: React.PropTypes.func,
    onInput: React.PropTypes.func,
    placeholder: React.PropTypes.string,
    value: React.PropTypes.string,
  };

  constructor() {
    super();

    this._onBlur = this._onBlur.bind(this);
    this._onChange = this._onChange.bind(this);
    this._onInput = this._onInput.bind(this);
  }

  _onBlur(event) {
    if (typeof this.props.onBlur === 'function') {
      this.props.onBlur(event, event.target.value);
    }
  }

  _onChange(event) {
    if (typeof this.props.onChange === 'function') {
      this.props.onChange(event, event.target.value);
    }
  }

  _onInput(event) {
    if (typeof this.props.onInput === 'function') {
      this.props.onInput(event, event.target.value);
    }
  }

  render() {
    return (
      <div style={styles.root}>
        <input type="search" value={this.props.value} placeholder={this.props.placeholder} onBlur={this._onBlur} onChange={this._onChange} onInput={this._onInput}
          disabled={this.props.disabled ? 'disabled' : ''} style={styles.input.base}
        />
      </div>
    );
  }
}
