import _ from 'lodash';
import marked from 'marked';
import Radium from 'radium';
import React from 'react';
import PropTypes from 'prop-types';

import SideBar from '../components/SideBar';
import TestStatus from '../components/TestStatus';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';
import Sandbox from '../components/Sandbox';
import Section from '../components/Section';
import Styles from '../styles';

class ComponentPage extends React.Component {
  static propTypes = {
    name: PropTypes.string,
    components: PropTypes.object,
  };

  render() {
    const currentComponent = this.props.components[this.props.name] || {};
    let components = _.map(this.props.components, (component, key) => ({ key, link: `/components/${key}`, title: component.title }));

    // Alphabetize the component list
    components = _.sortBy(components, 'title');

    const documentation = currentComponent.documentation ? marked(currentComponent.documentation) : '<h1>No Documentation</h1>';

    return (
      <div style={{ display: 'flex', flexFlow: 'row nowrap', flex: '1 1 100%' }}>
        <SideBar items={components} />

        {!_.isEmpty(currentComponent) ? (
          <div style={{ display: 'flex', flexFlow: 'column nowrap', flex: '1 1 auto', overflow: 'hidden' }}>
            <Section>
              <Heading>{currentComponent.title}</Heading>
              <Paragraph>{currentComponent.description}</Paragraph>
              <TestStatus test={currentComponent.test} />
            </Section>
            <div style={{ overflow: 'auto' }}>
              <Section dark>
                <Sandbox component={currentComponent} />
              </Section>
              <Section style={{ paddingLeft: '1rem', paddingRight: '1rem' }}>
                <div dangerouslySetInnerHTML={{ __html: documentation }} />
              </Section>
            </div>
          </div>
        ) : (
          <div style={{ padding: Styles.padding.default }}>No Component Selected</div>
        )}
      </div>
    );
  }
}

export default ComponentPage = Radium(ComponentPage); // eslint-disable-line new-cap
