import Radium from 'radium';
import React from 'react';
import { Link } from 'react-router';
import Styles from '../styles';

const itemStyles = {
  base: {
    display: 'block',
    color: Styles.font.color.secondary,
    textDecoration: 'none',
    padding: Styles.padding.default,
    transition: 'color 200ms ease',

    ':hover': {
      color: Styles.color.grey37,
      transition: 'none',
    },
  },
  active: {
    color: Styles.color.grey37,
    fontWeight: Styles.font.weight.boldSemi,
  },
};

const ButtonLink = Radium(Link); // eslint-disable-line new-cap

export default class ListItem extends React.Component {
  static propTypes = {
    link: React.PropTypes.string,
    title: React.PropTypes.string,
  };

  render() {
    return (
      <ButtonLink to={this.props.link} style={itemStyles.base} activeStyle={itemStyles.active}>{this.props.title}</ButtonLink>
    );
  }
}
