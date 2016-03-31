import React from 'react';
import Styles from '../styles';

export default class ColorStyleDisplay extends React.Component {
  static propTypes = {
    color: React.PropTypes.string,
    name: React.PropTypes.string,
  };

  static boxStyles = {
    flex: 'none',
    width: Styles.padding.five,
    height: Styles.padding.five,
    marginBottom: Styles.padding.default,
    marginRight: Styles.padding.default,
    backgroundColor: 'white',
    border: Styles.border.default,
    borderRadius: Styles.border.radius,
  };

  static colorFlanderBoxStyles = {
    display: 'inline-block',
    float: 'left',
    height: '60%',
    width: '100%',
  };

  static labelNameStyles = {
    fontWeight: Styles.font.weight.boldSemi,
    lineHeight: Styles.font.lineHeight.loose,
  };

  static labelValueStyles = {
    color: '#969799',
  };

  static labelWrapperStyles = {
    display: 'inline-block',
    float: 'left',
    height: '40%',
    width: '100%',
    padding: Styles.padding.quarter,
    fontSize: Styles.font.size.small,
  };

  render() {
    const colorFlanderBoxStyles = Object.assign({ backgroundColor: this.props.color }, ColorStyleDisplay.colorFlanderBoxStyles);

    return (
      <div style={ColorStyleDisplay.boxStyles}>
        <div style={colorFlanderBoxStyles}></div>
        <div style={ColorStyleDisplay.labelWrapperStyles}>
          <div style={ColorStyleDisplay.labelNameStyles}>{this.props.name}</div>
          <div style={ColorStyleDisplay.labelValueStyles}>{this.props.color}</div>
        </div>
      </div>
    );
  }
}
