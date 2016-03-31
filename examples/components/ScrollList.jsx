import Radium from 'radium';
import React from 'react';

class ScrollList extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
    items: React.PropTypes.arrayOf(React.PropTypes.object),
    style: React.PropTypes.object,
  };

  static baseStyles = {
    height: '100%',
    overflow: 'auto',
  };

  renderChildren() {
    const items = this.props.items || [];

    return items.map((item) => {
      const child = React.cloneElement(this.props.children, item);

      return (
        <li key={item.key}>{child}</li>
      );
    });
  }

  render() {
    return (
      <ul style={Object.assign({}, ScrollList.baseStyles, this.props.style)}>
        {this.renderChildren()}
      </ul>
    );
  }
}

export default Radium(ScrollList); // eslint-disable-line new-cap
