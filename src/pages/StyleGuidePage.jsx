import React from 'react';

import ColorStyleDisplay from '../components/ColorStyleDisplay.jsx';
import FontSizeStyleDisplay from '../components/FontSizeStyleDisplay.jsx';
import Heading from '../components/Heading.jsx';

export default class StyleGuidePage extends React.Component {
  static propTypes = {
    styles: React.PropTypes.object,
  };

  render() {
    const style = {
      height: '100%',
      width: '100%',
      padding: '1.5rem',
      overflow: 'auto',
    };

    const pageTitle = {
      marginTop: '1.5rem',
      marginBottom: '6rem',
      color: '#969799',
    };

    const h1 = {
      marginBottom: '2.25rem',
    };

    const h2 = {
      fontSize: '1.5rem',
      color: '#4A4A4A',
    };

    const section = {
      base: {
        display: 'flex',
      },
      color: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        width: '100%',
      },
      text: {
        flexDirection: 'column',
      },
    };

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
      <div style={style}>
        <Heading style={pageTitle}>Style Guide Page</Heading>
        <Heading style={h1}>Colors</Heading>
        <div style={Object.assign({}, section.base, section.color)}>
          {listOfColors}
        </div>

        <br />
        <br />

        <Heading style={h1}>Typography</Heading>
        <Heading style={h2}>Font Sizes</Heading>
        <div style={Object.assign({}, section.base, section.text)}>
          {listOfFontSizes}
        </div>
      </div>
    );
  }
}
