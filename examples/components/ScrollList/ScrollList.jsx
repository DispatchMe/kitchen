import radium from 'radium';
import React, { Component, PropTypes } from 'react';

class ScrollList extends Component {
  static propTypes = {
    children: PropTypes.element,
    items: PropTypes.arrayOf(PropTypes.object),
    style: PropTypes.object,
  };

  static defaultProps = {
    items: [],
  };

  static exampleProps = {
    children: (
      <div>Item</div>
    ),
    items: [{}, {}, {}, {}, {}, {}, {}, {}],
    style: {
      height: '100px',
    },
  };

  static containerStyles = {
    height: '100%',
    overflow: 'auto',
  };

  renderChildren() {
    const { children, items = [] } = this.props;

    return items.map((item, index) => {
      const child = React.cloneElement(children, item);

      return (
        <li key={index}>{child}</li>
      );
    });
  }

  render() {
    const { style = {} } = this.props;

    return (
      <ul style={[ScrollList.containerStyles, style]}>
        {this.renderChildren()}
      </ul>
    );
  }
}

export default radium(ScrollList);
