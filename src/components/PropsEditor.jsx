import _ from 'lodash';
import React from 'react';
import Styles from '../styles';
import PropInput from './PropInput';

export default class PropsEditor extends React.Component {
  static propTypes = {
    component: React.PropTypes.func,
    onUpdateProps: React.PropTypes.func,
    style: React.PropTypes.object,
  };

  static labelStyles = {
    fontSize: Styles.font.size.small,
    fontWeight: Styles.font.weight.boldSemi,
    color: Styles.color.grey37,
  };

  static examplePropsLabelStyles = {
    ...PropsEditor.labelStyles,
    marginTop: Styles.padding.default,
  };

  renderPropInputs() {
    return _.map(this.props.component.propTypes, (propType, propName) => (
      <tr key={propName}>
        <td>
          {propName}
        </td>
        <td style={{ width: '20px' }}></td>
        <td>
          <PropInput name={propName} type={propType} onChange={this.props.onUpdateProps} />
        </td>
      </tr>
    ));
  }

  render() {
    return (
      <div style={{ width: '50%', overflow: 'auto' }}>
        <span style={PropsEditor.labelStyles}>PROPS</span>
        <table style={this.props.style}>
          <tbody>
            {this.renderPropInputs()}
          </tbody>
        </table>
        <div style={PropsEditor.examplePropsLabelStyles}>EXAMPLE PROPS</div>
        <pre>{JSON.stringify(this.props.component.exampleProps || {}, null, 2)}</pre>
      </div>
    );
  }
}
