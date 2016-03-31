import _ from 'lodash';
import marked from 'marked';
import React from 'react';

import SideBar from '../components/SideBar.jsx';
import SplitView from '../components/SplitView.jsx';
import Heading from '../components/Heading.jsx';
import Paragraph from '../components/Paragraph.jsx';
import Section from '../components/Section.jsx';
import Icon from '../components/Icon.jsx';
import Styles from '../styles';

export default class IconPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    icons: React.PropTypes.object,
  };

  renderIconVariants() {
    const currentIcon = this.props.icons[this.props.name] || {};

    return _.map(currentIcon.variants, (variant, index) => (<Icon key={index} name={currentIcon.name} icon={currentIcon.icon} variant={variant} style={{ width: Styles.padding.two, height: Styles.padding.two }} />));
  }

  render() {
    const currentIcon = this.props.icons[this.props.name] || {};

    const icons = _.map(this.props.icons, (icon, key) => ({ key, link: `/icons/${key}`, title: icon.title }));
    const documentation = currentIcon.documentation ? marked(currentIcon.documentation) : '<h1>No Documentation</h1>';

    const viewOne = (
      <SideBar items={icons} />
    );

    const viewTwo = !_.isEmpty(currentIcon) ? (
      <div style={{ height: '100%' }}>
        <Section>
          <Heading>{currentIcon.title}</Heading>
          <Paragraph>{currentIcon.description}</Paragraph>
        </Section>
        <Section dark>
          <Icon name={currentIcon.name} icon={currentIcon.icon} style={{ width: Styles.padding.two, height: Styles.padding.two }} />
          {this.renderIconVariants()}
        </Section>
        <Section>
          <div dangerouslySetInnerHTML={{ __html: documentation }} />
        </Section>
      </div>
    ) : (
      <div style={{ padding: Styles.padding.default }}>No Icon Selected</div>
    );

    return (
      <SplitView orientation="horizontal" leftWidth={Styles.layout.sidebar.width} viewOne={viewOne} viewTwo={viewTwo} />
    );
  }
}
