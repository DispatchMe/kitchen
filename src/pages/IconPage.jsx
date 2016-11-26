import _ from 'lodash';
import React from 'react';

import Icon from '../components/Icon';
import Styles from '../styles';

const styles = {
  container: {
    display: 'flex',
    flexFlow: 'row wrap',
    alignItems: 'flex-start',
    overflow: 'auto',
    marginRight: 'auto',
    marginLeft: 'auto',
    width: '100%',
    maxWidth: 1160,
  },
  iconWrapper: {
    display: 'flex',
    flexFlow: 'column nowrap',
    alignItems: 'center',
    marginTop: 16,
    marginRight: 16,
    marginBottom: 16,
    marginLeft: 16,
    height: 84 + 24,
    width: 84,
  },
  icon: {
    marginTop: 'auto',
    marginBottom: 'auto',
    height: 48,
    width: 48,
  },
  iconTitle: {
    fontSize: 11,
    color: '#757575',
    fontWeight: 400,
    textAlign: 'center',
    marginTop: 0,
    marginBottom: 0,
    height: 26,
  },
};

export default class IconPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    icons: React.PropTypes.object,
  };

  renderIcons(icons) {
    const iconDom = [];

    _.each(icons, (icon, key) => {
      return iconDom.push(
        <div
          key={key}
          style={styles.iconWrapper}
        >
          <Icon name={icon.name} icon={icon.icon} style={styles.icon} />

          <h1 style={styles.iconTitle}>{icon.title}</h1>
        </div>
      );
    });

    return iconDom;
  }

  render() {
    const { icons } = this.props;

    if (_.isEmpty(icons)) {
      return (
        <div style={{ padding: Styles.padding.default }}>No Icons :(</div>
      );
    }

    return (
      <div style={styles.container}>
        {this.renderIcons(icons)}
      </div>
    );
  }
}
