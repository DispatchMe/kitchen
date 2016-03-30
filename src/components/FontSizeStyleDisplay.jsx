import React from 'react';
import Styles from '../styles';

export default class FontSizeStyleDisplay extends React.Component {
  static propTypes = {
    fontSize: React.PropTypes.string,
    name: React.PropTypes.string,
  };

  render() {
    const boxStyle = {
      flex: 'none',
      marginBottom: Styles.padding.default,
      marginRight: Styles.padding.default,
      backgroundColor: 'white',
      border: Styles.border.default,
      borderRadius: Styles.border.radius,
    };

    const textWrapperStyle = {
      paddingTop: Styles.padding.default,
      paddingBottom: Styles.padding.default,
      paddingLeft: Styles.padding.half,
      paddingRight: Styles.padding.half,
    };

    const textStyle = {
      display: 'block',
      width: '100%',
      fontSize: this.props.fontSize,
    };

    const labelWrapperStyle = {
      width: '100%',
      paddingTop: Styles.padding.quarter,
      paddingBottom: Styles.padding.quarter,
      paddingLeft: Styles.padding.half,
      paddingRight: Styles.padding.half,
      fontSize: Styles.font.size.base,
      borderTop: Styles.border.default,
    };

    const labelNameStyle = {
      fontWeight: Styles.font.weight.boldSemi,
      lineHeight: Styles.font.lineHeight.loose,
    };

    const labelValueStyle = {
      color: '#969799',
    };

    return (
      <div style={boxStyle}>
        <div style={textWrapperStyle}>
          <div style={textStyle}>Schedule a demo now to discover what Dispatch can do for your business.</div>
        </div>
        <div style={labelWrapperStyle}>
          <div style={labelNameStyle}>{this.props.name}</div>
          <div style={labelValueStyle}>{this.props.fontSize}</div>
        </div>
      </div>
    );
  }
}
