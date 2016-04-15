import _ from 'lodash';
import marked from 'marked';
import Radium from 'radium';
import React from 'react';

import SideBar from '../components/SideBar';
import TestStatus from '../components/TestStatus';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Sandbox from '../components/Sandbox';
import Section from '../components/Section';
import SplitView from '../components/SplitView';
import Styles from '../styles';

class ComponentPage extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
    components: React.PropTypes.object,
  };

  render() {
    const currentComponent = this.props.components[this.props.name] || {};
    let components = _.map(this.props.components, (component, key) => ({ key, link: `/components/${key}`, title: component.title }));

    // Alphabetize the component list
    components = _.sortBy(components, 'title');

    const documentation = currentComponent.documentation ? marked(currentComponent.documentation) : '<h1>No Documentation</h1>';

    const viewOne = (
      <SideBar items={components} />
    );

    const viewTwo = !_.isEmpty(currentComponent) ? (
      <div style={{ height: '100%', overflow: 'auto' }}>
        <Section>
          <Heading>{currentComponent.title}</Heading>
          <Paragraph>{currentComponent.description}</Paragraph>
          <TestStatus test={currentComponent.test} />
        </Section>
        <Section dark>
          <Sandbox component={currentComponent} />
        </Section>
        <Section>
          <div dangerouslySetInnerHTML={{ __html: documentation }} />
        </Section>
      </div>
    ) : (
      <div style={{ padding: Styles.padding.default }}>No Component Selected</div>
    );

    return (
      <SplitView
        orientation="horizontal"
        leftWidth={Styles.layout.sidebar.width}
        viewOne={viewOne}
        viewTwo={viewTwo}
      />
    );
  }
}

export default ComponentPage = Radium(ComponentPage); // eslint-disable-line new-cap
