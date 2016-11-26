import Radium from 'radium';
import React from 'react';
import { Link } from 'react-router';
import layout from '../styles/layout';

const ButtonLink = Radium(Link); // eslint-disable-line new-cap

export default class Header extends React.Component {

  static baseStyles = {
    position: 'relative',
    height: layout.header.height,
    width: '100%',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    borderBottom: '1px solid #e1e1e1',
    textAlign: 'center',
    lineHeight: '60px',
  };

  static brandingContainerStyles = {
    position: 'absolute',
    left: '1.5rem',
    top: '50%',
    marginTop: '-30px',
  };

  static brandingTextStyles = {
    marginLeft: '0.78rem',
    color: '#CCCCCC',
    fontSize: '1.28rem',
    verticalAlign: 'middle',
  };

  static linkActiveStyles = {
    color: 'white',
    backgroundColor: '#1895CC',
  };

  static linkBaseStyles = {
    display: 'inline-block',
    marginLeft: '0.375rem',
    marginRight: '0.375rem',

    paddingTop: '.5rem',
    paddingBottom: '.5rem',
    paddingLeft: '0.75rem',
    paddingRight: '0.75rem',

    fontSize: '1rem',
    lineHeight: '1.4',
    textDecoration: 'none',

    borderRadius: '3px',

    transition: 'background-color 150ms, color 150ms',

    ':hover': {
      color: '#1895CC',
      backgroundColor: '#F5F5F5',
    },
  };

  static linkInactiveStyles = {
    color: '#969799',
    backgroundColor: 'white',
  };

  render() {
    return (
      <div style={Header.baseStyles}>
        <div className="branding" style={Header.brandingContainerStyles}>
          <span style={Header.brandingTextStyles}>kitchensink</span>
        </div>
        <div>
          <ButtonLink to={'/components'} style={Object.assign({}, Header.linkBaseStyles, Header.linkInactiveStyles)} activeStyle={Header.linkActiveStyles}>Components</ButtonLink>
          <ButtonLink to={'/icons'} style={Object.assign({}, Header.linkBaseStyles, Header.linkInactiveStyles)} activeStyle={Header.linkActiveStyles}>Icons</ButtonLink>
          <ButtonLink to={'/style_guide'} style={Object.assign({}, Header.linkBaseStyles, Header.linkInactiveStyles)} activeStyle={Header.linkActiveStyles}>Style Guide</ButtonLink>
        </div>
      </div>
    );
  }
}
