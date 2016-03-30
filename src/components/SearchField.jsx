import React from 'react';
import Styles from '../styles';

const styles = {
  root: {
    position: 'relative',
  },
  input: {
    base: {
      height: Styles.layout.header.height,
      width: '100%',
      padding: `${Styles.padding.half} ${Styles.padding.default}`,
      fontSize: Styles.font.size.base,
      color: Styles.font.color.primary,
      border: 'none',
      borderBottom: '1px solid #e1e1e1',
      borderRadius: '0',
    },
  },
  icon: {
    position: 'absolute',
    top: '50%',
    height: Styles.font.size.larger,
    width: Styles.font.size.larger,
    color: Styles.color.blue,
    transform: 'translateY(-50%)',
  },
  iconWrapper: {
    position: 'absolute',
    top: '0',
    left: '0',
    right: '0',
    bottom: '1px',
    paddingLeft: Styles.padding.default,
    backgroundColor: 'white',
    cursor: 'pointer',
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
