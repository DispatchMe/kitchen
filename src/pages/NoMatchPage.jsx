import React from 'react';
import Styles from '../styles';

export default class NoMatchPage extends React.Component {
  static containerStyles = {
    padding: Styles.padding.default,
  };

  render() {
    return (
      <div style={NoMatchPage.containerStyles}>No Match Page</div>
    );
  }
}
