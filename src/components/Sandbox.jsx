import _ from 'lodash';
import React from 'react';
import PropTypes from 'prop-types';
import Styles from '../styles';
import Console from './Console';
import PropsEditor from './PropsEditor';

export default class Sandbox extends React.Component {
  static propTypes = {
    component: PropTypes.object,
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

  onUpdateProps = (componentProps) => {
    this.setState({ componentProps });
  }

  render() {
    const currentComponent = this.props.component || {};
    const events = {};

    // Pass in a function for each event function that will allow us
    // to display all the calls made to that function
    _.each(currentComponent.events, (eventName) => {
      events[eventName] = (...args) => {
        const messages = this.state.messages;

        let argsString = '';
        _.each(args, arg => {
          if (argsString.length > 0) {
            argsString += ', ';
          }
          // Better display of React SyntheticEvent instances
          if (arg && typeof arg === 'object' && arg.hasOwnProperty('nativeEvent')) {
            argsString += arg.constructor.name;
          } else {
            argsString += JSON.stringify(arg);
          }
        });

        let title;
        if (argsString.length) {
          title = `${eventName}(${argsString})`;
        } else {
          title = eventName;
        }

        messages.unshift({
          title,
          details: args,
        });

        this.setState({ messages });
      };
    });

    const props = {
      ...(currentComponent.props || {}),
      ...events,
      ...this.state.componentProps,
    };

    return (
      <div className="sandbox" style={Sandbox.rootStyles}>
        <div className="sandbox-heading" style={Sandbox.headingStyles}>
          <div className="sandbox-title" style={Sandbox.componentTitleStyles}>{currentComponent.title || 'Component name'}</div>
          <div className="sandbox-variant">
            <div style={Sandbox.variantTitleStyles}>↳</div>
            <div style={Sandbox.variantTitleStyles}>{currentComponent.variant || 'Default'}</div>
          </div>
        </div>
        <currentComponent.component {...props} />

        <div style={{ display: 'flex', flexFlow: 'row nowrap', paddingTop: Styles.padding.default }}>
          <Console style={{ paddingTop: Styles.padding.default }} messages={this.state.messages} />

          <PropsEditor style={{ paddingTop: Styles.padding.default }} component={currentComponent.component} onUpdateProps={this.onUpdateProps} />
        </div>
      </div>
    );
  }
}
