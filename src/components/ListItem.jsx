import Radium from 'radium';
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router';
import Styles from '../styles';

const ButtonLink = Radium(Link); // eslint-disable-line new-cap

export default class ListItem extends React.Component {
  static propTypes = {
    link: PropTypes.string,
    title: PropTypes.string,
  };

  static itemBaseStyles = {
    display: 'block',
    color: Styles.font.color.secondary,
    textDecoration: 'none',
    padding: Styles.padding.default,
    transition: 'color 200ms ease',

    ':hover': {
      color: Styles.color.grey37,
      transition: 'none',
    },
  };

  static itemActiveStyles = {
    color: Styles.color.grey37,
    fontWeight: Styles.font.weight.boldSemi,
  };

  render() {
    return (
      <ButtonLink to={this.props.link} style={ListItem.itemBaseStyles} activeStyle={ListItem.itemActiveStyles}>{this.props.title}</ButtonLink>
    );
  }
}
