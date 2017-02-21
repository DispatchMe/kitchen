import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Styles from '../styles';
import PropInput from './PropInput';

export default class PropsEditor extends Component {
  static propTypes = {
    component: PropTypes.func,
    onUpdateProps: PropTypes.func,
    style: PropTypes.object,
  };

  static labelStyles = {
    fontSize: Styles.font.size.small,
    fontWeight: Styles.font.weight.boldSemi,
    color: Styles.color.grey37,
  };

  static preStyles = {
    paddingTop: '1rem',
    paddingRight: '1rem',
    paddingBottom: '1rem',
    paddingLeft: '1rem',
    backgroundColor: Styles.color.white,
    height: 300,
    overflow: 'auto',
  };

  constructor(props) {
    super(props);

    this.state = {
      customProps: {},
    };

    // We immediately call onUpdateProps if there is an example state selected
    // by default
    const { component = {}, onUpdateProps } = props;
    const { exampleProps } = component;
    if (exampleProps) {
      if (Array.isArray(exampleProps)) {
        onUpdateProps(exampleProps[0].props);
      } else {
        onUpdateProps(exampleProps);
      }
    }
  }

  componentDidUpdate(prevProps) {
    const { component = {} } = this.props;
    const { component: oldComponent = {} } = prevProps;

    if (oldComponent.name !== component.name || oldComponent.displayName !== component.displayName) {
      this.handleSelect(this.lastSelectedTabIndex || 0);
    }
  }

  handleUpdateProps = (event, propName, value) => {
    const { onUpdateProps } = this.props;

    const customProps = {
      ...this.state.customProps,
      [propName]: value,
    };

    this.setState({
      customProps,
    });

    onUpdateProps(customProps);
  };

  handleSelect = (selectedIndex) => {
    const { component = {}, onUpdateProps } = this.props;
    const { exampleProps } = component;

    // Clear custom props because form will always be cleared when we change tabs
    this.setState({ customProps: {} });

    let totalTabCount = 1; // always custom
    if (exampleProps) {
      if (Array.isArray(exampleProps)) {
        // New style, with multiple states
        totalTabCount += exampleProps.length;
      } else {
        // Old style, just one example state
        totalTabCount += 1;
      }
    }

    let newProps;
    if (selectedIndex === totalTabCount - 1) {
      // Switched to custom tab, which starts out blank
      newProps = {};
    } else if (Array.isArray(exampleProps)) {
      newProps = exampleProps[selectedIndex].props;
    } else {
      newProps = exampleProps;
    }

    onUpdateProps(newProps);

    this.lastSelectedTabIndex = selectedIndex;
  };

  renderPropInputs() {
    const { component = {} } = this.props;

    return _.map(component.propTypes, (propType, propName) => (
      <tr key={propName}>
        <td>
          {propName}
        </td>
        <td style={{ width: '20px' }}></td>
        <td>
          <PropInput name={propName} type={propType} onChange={this.handleUpdateProps} />
        </td>
      </tr>
    ));
  }

  renderTabs() {
    const { component = {} } = this.props;
    const tabs = [];

    if (component.exampleProps) {
      if (Array.isArray(component.exampleProps)) {
        // New style, with multiple states
        component.exampleProps.forEach(({ name }) => {
          tabs.push(`${name} State`);
        });
      } else {
        // Old style, just one example state
        tabs.push('Example State');
      }
    }

    tabs.push('Custom Props');

    return tabs.map(name => <Tab key={name}>{name}</Tab>);
  }

  renderTabPanels() {
    const { component = {} } = this.props;
    const panels = [];

    if (component.exampleProps) {
      if (Array.isArray(component.exampleProps)) {
        // New style, with multiple states
        component.exampleProps.forEach(({ props }) => {
          panels.push(props);
        });
      } else {
        // Old style, just one example state
        panels.push(component.exampleProps);
      }
    }

    return panels.map((json, index) => {
      return (
        <TabPanel key={String(index)}>
          <pre style={PropsEditor.preStyles}>{JSON.stringify(json || {}, null, 2)}</pre>
        </TabPanel>
      );
    });
  }

  render() {
    return (
      <div style={{ width: '50%', overflow: 'auto' }}>
        <span style={PropsEditor.labelStyles}>PROPS</span>
        <Tabs
          onSelect={this.handleSelect}
        >
          <TabList>
            {this.renderTabs()}
          </TabList>
          {this.renderTabPanels()}
          <TabPanel>
            <table style={this.props.style}>
              <tbody>
                {this.renderPropInputs()}
              </tbody>
            </table>
          </TabPanel>
        </Tabs>
      </div>
    );
  }
}
