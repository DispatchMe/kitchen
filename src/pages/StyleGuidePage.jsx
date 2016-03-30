import React from 'react';

import ColorStyleDisplay from '../components/ColorStyleDisplay.jsx';
import FontSizeStyleDisplay from '../components/FontSizeStyleDisplay.jsx';
import Heading from '../components/Heading.jsx';

export default class StyleGuidePage extends React.Component {
  static propTypes = {
    styles: React.PropTypes.object,
  };

  static containerStyles = {
    height: '100%',
    width: '100%',
    padding: '1.5rem',
    overflow: 'auto',
  };

  static pageTitle = {
    marginTop: '1.5rem',
    marginBottom: '6rem',
    color: '#969799',
  };

  static h1 = {
    marginBottom: '2.25rem',
  };

  static h2 = {
    fontSize: '1.5rem',
    color: '#4A4A4A',
  };

  static colorSection = {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%',
  };

  static textSection = {
    display: 'flex',
    flexDirection: 'column',
  };

  render() {
    const listOfColors = [];
    const listOfFontSizes = [];

    if (this.props.styles) {
      Object.keys(this.props.styles.color).forEach((key) => {
        const color = this.props.styles.color[key];
        if (typeof color === 'string') listOfColors.push(<ColorStyleDisplay key={key} name={key} color={color} />);
      });

      Object.keys(this.props.styles.font.size).forEach((key) => {
        const size = this.props.styles.font.size[key];
        listOfFontSizes.push(<FontSizeStyleDisplay key={key} name={key} fontSize={size} />);
      });
    }

    return (
      <div style={StyleGuidePage.containerStyles}>
        <Heading style={StyleGuidePage.pageTitle}>Style Guide Page</Heading>
        <Heading style={StyleGuidePage.h1}>Colors</Heading>

        <div style={StyleGuidePage.colorSection}>
          {listOfColors}
        </div>

        <br />
        <br />

        <Heading style={StyleGuidePage.h1}>Typography</Heading>
        <Heading style={StyleGuidePage.h2}>Font Sizes</Heading>

        <div style={StyleGuidePage.textSection}>
          {listOfFontSizes}
        </div>
      </div>
    );
  }
}
