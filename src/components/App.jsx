import { Style } from 'radium';
import React from 'react';
import Header from './Header';
import SplitView from './SplitView';
import Styles from '../styles';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object,
  };

  static styles = {
    html: {
      boxSizing: 'border-box',
      width: '100%',
      margin: 0,
      padding: 0,
      font: '14px/1.2 Lato, Helvetica Neue, Helvetica, Arial, Lucida Grande, sans-serif',
    },
    '*, *:before, *:after': {
      boxSizing: 'inherit',
    },
    body: {
      width: '100%',
      margin: 0,

      font: 'inherit',
      color: Styles.color.grey37,

      '-moz-osx-font-smoothing': 'grayscale',
      '-webkit-font-smoothing': 'antialiased',
      fontSmoothing: 'antialiased',
      textRendering: 'optimizeLegibility',

      '-webkit-tap-highlight-color': 'transparent',
      background: Styles.color.white,
    },
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
    'html, body, body > div': {
      height: '100%',
    },

    'button, input, select, textarea': {
      margin: 0,
      '-webkit-font-smoothing': 'inherit',
      backgroundImage: 'none',
      borderStyle: 'solid',
      borderWidth: '1px',
      outlineOffset: 0,
      outlineStyle: 'none',
      outlineWidth: 0,
      boxShadow: 'none',
    },

    'input[type="search"]': {
      '-webkit-appearance': 'textfield',
    },

    'input[type="search"]::-webkit-search-decoration, input[type="search"]::-webkit-search-cancel-button, input[type="search"]::-webkit-search-results-button, input[type="search"]::-webkit-search-results-decoration': {
      '-webkit-appearance': 'none',
    },

    // Remove browser up/down buttons for input[type="number"]
    'input[type="number"]': {
      '-webkit-appearance': 'none',
    },

    'input[type="number"]::-webkit-inner-spin-button, input[type="number"]::-webkit-outer-spin-button': {
      margin: 0,
      '-webkit-appearance': 'none',
    },

    // Input placeholder styles
    '::input-placeholder, ::-moz-input-placeholder, :-ms-input-placeholder, ::-ms-input-placeholder, ::-webkit-input-placeholder, input::input-placeholder, input::-moz-input-placeholder, input:-ms-input-placeholder, input::-ms-input-placeholder, input::-webkit-input-placeholder': {
      color: Styles.color.grey37,
    },
  };

  render() {
    return (
      <div>
        <SplitView orientation="vertical" topHeight={Styles.layout.header.height} viewOne={<Header />} viewTwo={this.props.children} />
        <Style rules={App.styles} />
      </div>
    );
  }
}
