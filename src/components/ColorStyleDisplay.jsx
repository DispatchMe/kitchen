import React from 'react';
import Styles from '../styles';

export default class ColorStyleDisplay extends React.Component {
  static propTypes = {
    color: React.PropTypes.string,
    name: React.PropTypes.string,
  };

  render() {
    const boxStyle = {
      flex: 'none',
      width: Styles.padding.get(5),
      height: Styles.padding.get(5),
      marginBottom: Styles.padding.default,
      marginRight: Styles.padding.default,
      backgroundColor: 'white',
      border: Styles.border.default,
      borderRadius: Styles.border.radius,
    };

    const colorFlanderBoxStyle = {
      display: 'inline-block',
      float: 'left',
      height: '60%',
      width: '100%',
      backgroundColor: this.props.color,
    };

    const labelWrapperStyle = {
      display: 'inline-block',
      float: 'left',
      height: '40%',
      width: '100%',
      padding: Styles.padding.quarter,
      fontSize: Styles.font.size.small,
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
        <div style={colorFlanderBoxStyle}></div>
        <div style={labelWrapperStyle}>
          <div style={labelNameStyle}>{this.props.name}</div>
          <div style={labelValueStyle}>{this.props.color}</div>
        </div>
      </div>
    );
  }
}
