import React from 'react';
import Styles from '../styles';

export default class FontSizeStyleDisplay extends React.Component {
  static propTypes = {
    fontSize: React.PropTypes.string,
    name: React.PropTypes.string,
  };

  static boxStyles = {
    flex: 'none',
    marginBottom: Styles.padding.default,
    marginRight: Styles.padding.default,
    backgroundColor: 'white',
    border: Styles.border.default,
    borderRadius: Styles.border.radius,
  };

  static labelNameStyles = {
    fontWeight: Styles.font.weight.boldSemi,
    lineHeight: Styles.font.lineHeight.loose,
  };

  static labelValueStyles = {
    color: '#969799',
  };

  static labelWrapperStyles = {
    width: '100%',
    paddingTop: Styles.padding.quarter,
    paddingBottom: Styles.padding.quarter,
    paddingLeft: Styles.padding.half,
    paddingRight: Styles.padding.half,
    fontSize: Styles.font.size.base,
    borderTop: Styles.border.default,
  };

  static textStyles = {
    display: 'block',
    width: '100%',
  };

  static textWrapperStyles = {
    paddingTop: Styles.padding.default,
    paddingBottom: Styles.padding.default,
    paddingLeft: Styles.padding.half,
    paddingRight: Styles.padding.half,
  };

  render() {
    const textStyles = Object.assign({ fontSize: this.props.fontSize }, FontSizeStyleDisplay.textStyles);

    return (
      <div style={FontSizeStyleDisplay.boxStyles}>
        <div style={FontSizeStyleDisplay.textWrapperStyles}>
          <div style={textStyles}>Schedule a demo now to discover what Dispatch can do for your business.</div>
        </div>
        <div style={FontSizeStyleDisplay.labelWrapperStyles}>
          <div style={FontSizeStyleDisplay.labelNameStyles}>{this.props.name}</div>
          <div style={FontSizeStyleDisplay.labelValueStyles}>{this.props.fontSize}</div>
        </div>
      </div>
    );
  }
}
