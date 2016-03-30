import _ from 'lodash';
import React from 'react';
import Styles from '../styles';
import PropInput from './PropInput.jsx';

export default class PropsEditor extends React.Component {
  static propTypes = {
    component: React.PropTypes.func,
    onUpdateProps: React.PropTypes.func,
    style: React.PropTypes.object,
  };

  static styles = {
    label: {
      fontSize: Styles.font.size.small,
      fontWeight: Styles.font.weight.boldSemi,
      color: Styles.color.grey37,
    },
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
      <div>
        <span style={PropsEditor.styles.label}>PROPS</span>
        <table style={this.props.style}>
          <tbody>
            {this.renderPropInputs()}
          </tbody>
        </table>
      </div>
    );
  }
}
