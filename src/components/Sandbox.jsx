import _ from 'lodash';
import React from 'react';
import Styles from '../styles';
import Console from './Console.jsx';
import PropsEditor from './PropsEditor.jsx';
import SplitView from './SplitView.jsx';

export default class Sandbox extends React.Component {
  static propTypes = {
    component: React.PropTypes.object,
  };

  static componentTitleStyles = {
    fontWeight: Styles.font.weight.light,
    color: '#969799',
  };

  static headingStyles = {
    marginBottom: Styles.padding.default,
  };

  static rootStyles = {
    position: 'relative',
    backgroundColor: Styles.color.grey97,
  };

  static variantTitleStyles = {
    display: 'inline-block',
    verticalAlign: 'middle',
    fontSize: Styles.font.size.largest,
    color: Styles.font.color.primary,
  };

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      componentProps: {},
    };
  }

  componentWillReceiveProps() {
    this.setState({ messages: [] });
  }

  onUpdateProps = (event, propName, value) => {
    const updatedProps = Object.assign({}, this.state.componentProps, { [propName]: value });

    this.setState({ componentProps: updatedProps });
  }

  render() {
    const currentComponent = this.props.component || {};
    const events = {};

    _.each(currentComponent.events, (eventName) => {
      events[eventName] = (event, value) => {
        const messages = this.state.messages;

        messages.unshift({ title: `${eventName}: ${value}`, details: event });

        this.setState({ messages });
      };
    });

    const props = Object.assign(currentComponent.props || {}, events);

    const console = (
      <Console style={{ paddingTop: Styles.padding.default }} messages={this.state.messages} />
    );

    const propsEditor = (
      <PropsEditor style={{ paddingTop: Styles.padding.default }} component={currentComponent.component} onUpdateProps={this.onUpdateProps} />
    );

    return (
      <div className="sandbox" style={Sandbox.rootStyles}>
        <div className="sandbox-heading" style={Sandbox.headingStyles}>
          <div className="sandbox-title" style={Sandbox.componentTitleStyles}>{currentComponent.title || 'Component name'}</div>
          <div className="sandbox-variant">
            <div style={Sandbox.variantTitleStyles}>↳</div>
            <div style={Sandbox.variantTitleStyles}>{currentComponent.variant || 'Default'}</div>
          </div>
        </div>
        <currentComponent.component {...props} {...this.state.componentProps} />
        <SplitView orientation="horizontal" leftWidth={'50%'} viewOne={console} viewTwo={propsEditor} style={{ paddingTop: Styles.padding.default }} />
      </div>
    );
  }
}
