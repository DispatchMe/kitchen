import Radium from 'radium';
import React from 'react';

import View from './View';

export default class SplitView extends React.Component {
  static propTypes = {
    orientation: React.PropTypes.string,
    leftWidth: React.PropTypes.string,
    rightWidth: React.PropTypes.string,
    topHeight: React.PropTypes.string,
    bottomHeight: React.PropTypes.string,
    style: React.PropTypes.object,
    viewOne: React.PropTypes.any,
    viewTwo: React.PropTypes.any,
  };

  static horizontalStyles = {
    height: '100%',
    float: 'left',
  };

  static topStyles = {
    height: '50%',
  };

  static bottomStyles = {
    height: '50%',
  };

  static leftStyles = {
    width: '50%',
  };

  static rightStyles = {
    width: '50%',
  };

  constructor(props) {
    super(props);

    const orientation = this.props.orientation || 'horizontal';

    if (orientation === 'horizontal') {
      let leftWidth = this.props.leftWidth;
      let rightWidth = this.props.rightWidth;

      if (leftWidth && leftWidth.indexOf('px') > -1) {
        rightWidth = `calc(100% - ${leftWidth})`;
      } else if (rightWidth && rightWidth.indexOf('px') > -1) {
        leftWidth = `calc(100% - ${rightWidth})`;
      }

      this.overridesLeft = leftWidth ? { width: leftWidth } : false;
      this.overridesRight = rightWidth ? { width: rightWidth } : false;
    } else if (orientation === 'vertical') {
      let topHeight = this.props.topHeight;
      let bottomHeight = this.props.bottomHeight;

      if (topHeight && topHeight.indexOf('px') > -1) {
        bottomHeight = `calc(100% - ${topHeight})`;
      } else if (bottomHeight && bottomHeight.indexOf('px') > -1) {
        topHeight = `calc(100% - ${bottomHeight})`;
      }

      this.overridesTop = topHeight ? { height: topHeight } : false;
      this.overridesBottom = bottomHeight ? { height: bottomHeight } : false;
    }
  }

  render() {
    let viewOneStyles = {};
    let viewTwoStyles = {};

    const orientation = this.props.orientation || 'horizontal';

    if (orientation === 'horizontal') {
      viewOneStyles = Object.assign({}, SplitView.horizontalStyles, SplitView.leftStyles, this.overridesLeft);
      viewTwoStyles = Object.assign({}, SplitView.horizontalStyles, SplitView.rightStyles, this.overridesRight);
    } else if (orientation === 'vertical') {
      viewOneStyles = Object.assign({}, SplitView.topStyles, this.overridesTop);
      viewTwoStyles = Object.assign({}, SplitView.bottomStyles, this.overridesBottom);
    }

    return (
      <View style={Object.assign({}, { overflow: 'hidden' }, this.props.style)}>
        <View style={viewOneStyles}>{this.props.viewOne}</View>
        <View style={viewTwoStyles}>{this.props.viewTwo}</View>
      </View>
    );
  }
}

SplitView = Radium(SplitView); // eslint-disable-line new-cap
