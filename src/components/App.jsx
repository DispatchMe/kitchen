import React from 'react';
import Header from './Header.jsx';
import SplitView from './SplitView.jsx';
import styles from './App.css';
import Styles from '../styles';

// Naming needed because of prexisting styles obj
const _styles = {
  height: '100%',
};

export default class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.object,
  };

  render() {
    return (
      <div style={_styles} className={styles.app}>
        <SplitView orientation="vertical" topHeight={Styles.layout.header.height} viewOne={<Header />} viewTwo={this.props.children} />
      </div>
    );
  }
}
