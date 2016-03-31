import React from 'react';
import Header from './Header.jsx';
import SplitView from './SplitView.jsx';
import styles from './App.css';
import Styles from '../styles';

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object,
  };

  static baseStyles = {
    height: '100%',
  };

  render() {
    return (
      <div style={App.baseStyles} className={styles.app}>
        <SplitView orientation="vertical" topHeight={Styles.layout.header.height} viewOne={<Header />} viewTwo={this.props.children} />
      </div>
    );
  }
}
