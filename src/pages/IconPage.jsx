import _ from 'lodash';
import React from 'react';

import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Icon from '../components/Icon';
import Styles from '../styles';

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
          style={{ display: 'flex', flexFlow: 'column nowrap', alignItems: 'center' }}
        >
          <div style={{ display: 'flex', flexFlow: 'column nowrap' }}>
            <Heading>{icon.title}</Heading>
            <Paragraph>{icon.description}</Paragraph>
          </div>

          <Icon name={icon.name} icon={icon.icon} style={{ width: Styles.padding.two, height: Styles.padding.two }} />
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
      <div style={{ display: 'flex', flexFlow: 'row wrap', alignItems: 'flex-start', flex: '1 1 100%' }}>
        {this.renderIcons(icons)}
      </div>
    );
  }
}
