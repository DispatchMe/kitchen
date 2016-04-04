import React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './App';
import ComponentPage from '../pages/ComponentPage';
import IconPage from '../pages/IconPage';
import StyleGuidePage from '../pages/StyleGuidePage';
import NoMatchPage from '../pages/NoMatchPage';


export default class Kitchensink extends React.Component {
  static propTypes = {
    components: React.PropTypes.object,
    icons: React.PropTypes.object,
    styles: React.PropTypes.object,
    params: React.PropTypes.object,
  };

  getComponents() {
    const { components } = this.props;
    return class extends React.Component {
      render() {
        return (
          <ComponentPage name={this.props.params.name} components={components} />
        );
      }
    };
  }

  getIcons() {
    const { icons } = this.props;
    return class extends React.Component {
      render() {
        return (
          <IconPage name={this.props.params.name} icons={icons} />
        );
      }
    };
  }

  getStyleGuide() {
    const { styles } = this.props;
    return class extends React.Component {
      render() {
        return (
          <StyleGuidePage styles={styles} />
        );
      }
    };
  }

  render() {
    return (
      <Router history={browserHistory}>
        <Route path="/" component={App}>
        <IndexRoute component={this.getComponents()} />
        <Route path="components" component={this.getComponents()}>
          <Route path=":name" component={this.getComponents()} />
        </Route>
        <Route path="icons" component={this.getIcons()}>
          <Route path=":name" component={this.getIcons()} />
        </Route>
        <Route path="style_guide" component={this.getStyleGuide()} />
        <Route path="*" component={NoMatchPage} />
        </Route>
      </Router>
    );
  }
}
