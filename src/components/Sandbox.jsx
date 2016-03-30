import _ from 'lodash';
import React from 'react';
import Styles from '../styles';
import Console from './Console.jsx';
import PropsEditor from './PropsEditor.jsx';
import SplitView from './SplitView.jsx';

const style = {
  root: {
    position: 'relative',
    backgroundColor: Styles.color.grey97,
  },
  heading: {
    marginBottom: Styles.padding.default,
  },
  componentTitle: {
    fontWeight: Styles.font.weight.light,
    color: '#969799',
  },
  variantTitle: {
    display: 'inline-block',
    verticalAlign: 'middle',
    fontSize: Styles.font.size.largest,
    color: Styles.font.color.primary,
  },
};

export default class Sandbox extends React.Component {
  static propTypes = {
    component: React.PropTypes.object,
  };

  constructor(props) {
    super(props);

    this.state = {
      messages: [],
      componentProps: {},
    };

    this.onUpdateProps = this.onUpdateProps.bind(this);
  }

  componentWillReceiveProps() {
    this.setState({ messages: [] });
  }

  onUpdateProps(event, propName, value) {
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
      <div className="sandbox" style={style.root}>
        <div className="sandbox-heading" style={style.heading}>
          <div className="sandbox-title" style={style.componentTitle}>{currentComponent.title || 'Component name'}</div>
          <div className="sandbox-variant">
            <div style={style.variantTitle}>↳</div>
            <div style={style.variantTitle}>{currentComponent.variant || 'Default'}</div>
          </div>
        </div>
        <currentComponent.component {...props} {...this.state.componentProps} />
        <SplitView orientation="horizontal" leftWidth={'50%'} viewOne={console} viewTwo={propsEditor} style={{ paddingTop: Styles.padding.default }} />
      </div>
    );
  }
}
