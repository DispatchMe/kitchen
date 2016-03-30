import React from 'react';
import Styles from '../styles';

const style = {
  padding: Styles.padding.default,
};

export default class NoMatchPage extends React.Component {
  render() {
    return (
      <div style={style}>No Match Page</div>
    );
  }
}
