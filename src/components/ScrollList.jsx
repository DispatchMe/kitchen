import Radium from 'radium';
import React from 'react';

const styles = {
  base: {
    height: '100%',
    overflow: 'auto',
  },
};

class ScrollList extends React.Component {
  static propTypes = {
    children: React.PropTypes.element,
    items: React.PropTypes.arrayOf(React.PropTypes.object),
    style: React.PropTypes.object,
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
      <ul style={Object.assign({}, styles.base, this.props.style)}>
        {this.renderChildren()}
      </ul>
    );
  }
}

export default Radium(ScrollList); // eslint-disable-line new-cap
