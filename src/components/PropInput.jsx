import React from 'react';

export default class PropInput extends React.Component {
  static propTypes = {
    name: React.PropTypes.any,
    type: React.PropTypes.func,
    onChange: React.PropTypes.func,
  };

  onChange = event => {
    const { name, onChange, type } = this.props;

    let value;
    if (type === React.PropTypes.bool || type === React.PropTypes.bool.isRequired) {
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
      type === React.PropTypes.func ||
      type === React.PropTypes.func.isRequired ||
      name === 'children') {
      return null;
    }

    let input;
    if (type === React.PropTypes.bool || type === React.PropTypes.bool.isRequired) {
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
