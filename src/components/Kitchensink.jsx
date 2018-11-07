import React from 'react';
import PropTypes from 'prop-types';
import { HashRouter, Route, Switch, browserHistory, Redirect } from 'react-router-dom';
import App from './App';
import ComponentPage from '../pages/ComponentPage';
import IconPage from '../pages/IconPage';
import StyleGuidePage from '../pages/StyleGuidePage';
import NoMatchPage from '../pages/NoMatchPage';

export default class Kitchensink extends React.Component {
  static propTypes = {
    browserHistory: PropTypes.object,
    components: PropTypes.object,
    icons: PropTypes.object,
    styles: PropTypes.object,
    match: PropTypes.object,
  };

  getComponents() {
    const { components } = this.props;
    return class extends React.Component {
      render() {
        return (
          <ComponentPage name={this.props.match && this.props.match.params && this.props.match.params.name} components={components} />
        );
      }
    };
  }

  getIcons() {
    const { icons } = this.props;
    return class extends React.Component {
      render() {
        return (
          <IconPage name={this.props.match && this.props.match.params && this.props.match.params.name} icons={icons} />
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
      <HashRouter history={this.props.browserHistory || browserHistory}>
        <App>
          <Switch>
            <Redirect exact from="/" to="/components" />
            <Route path={['/components/:name', '/components']} component={this.getComponents()} />
            <Route path={['/icons/:name', '/icons']} component={this.getIcons()} />
            <Route path="style_guide" component={this.getStyleGuide()} />
            <Route component={NoMatchPage} />
          </Switch>
        </App>
      </HashRouter>
    );
  }
}
