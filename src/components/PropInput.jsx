import React from 'react';
import PropTypes from 'prop-types';

export default class PropInput extends React.Component {
  static propTypes = {
    name: PropTypes.any,
    type: PropTypes.func,
    onChange: PropTypes.func,
  };

  onChange = event => {
    const { name, onChange, type } = this.props;

    let value;
    if (type === PropTypes.bool || type === PropTypes.bool.isRequired) {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    try {
      value = JSON.parse(value);
    } catch (e) { } // eslint-disable-line no-empty

    onChange(event, name, value);
  }

  render() {
    const { name, type } = this.props;

    if (
      type === PropTypes.func ||
      type === PropTypes.func.isRequired ||
      name === 'children') {
      return null;
    }

    let input;
    if (type === PropTypes.bool || type === PropTypes.bool.isRequired) {
      input = (<input type="checkbox" onChange={this.onChange} />);
    } else {
      input = (<input onChange={this.onChange} />);
    }

    return (
      <div>
        {input}
      </div>
    );
  }
}
