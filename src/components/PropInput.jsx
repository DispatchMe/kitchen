import React from 'react';

export default class PropInput extends React.Component {
  static propTypes = {
    name: React.PropTypes.any,
    type: React.PropTypes.func,
    onChange: React.PropTypes.func,
  };

  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    let value;

    if (this.props.type === React.PropTypes.bool) {
      value = event.target.checked;
    } else {
      value = event.target.value;
    }

    try {
      value = JSON.parse(value);
    } catch (e) { } // eslint-disable-line no-empty

    this.props.onChange(event, this.props.name, value);
  }

  render() {
    let input;

    if (this.props.type === React.PropTypes.bool) {
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
