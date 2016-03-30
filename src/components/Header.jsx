import Radium from 'radium';
import React from 'react';
import { Link } from 'react-router';

const styles = {
  base: {
    position: 'relative',
    height: '100%',
    width: '100%',
    paddingLeft: '1.5rem',
    paddingRight: '1.5rem',
    borderBottom: '1px solid #e1e1e1',
    textAlign: 'center',
    lineHeight: '60px',
  },
};

const brandingStyles = {
  container: {
    position: 'absolute',
    left: '1.5rem',
    top: '50%',
    marginTop: '-30px',
  },
  logo: {
    height: '30px',
    verticalAlign: 'middle',
  },
  text: {
    marginLeft: '0.78rem',
    color: '#CCCCCC',
    fontSize: '1.28rem',
    verticalAlign: 'middle',
  },
};

const linkStyles = {
  base: {
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
  },
  inactive: {
    color: '#969799',
    backgroundColor: 'white',
  },
  active: {
    color: 'white',
    backgroundColor: '#1895CC',
  },
};

const ButtonLink = Radium(Link); // eslint-disable-line new-cap

export default class Header extends React.Component {
  render() {
    return (
      <div style={styles.base}>
        <div className="branding" style={brandingStyles.container}>
          <span style={brandingStyles.text}>kitchensink</span>
        </div>
        <div>
          <ButtonLink to={'/components'} style={Object.assign({}, linkStyles.base, linkStyles.inactive)} activeStyle={linkStyles.active}>Components</ButtonLink>
          <ButtonLink to={'/icons'} style={Object.assign({}, linkStyles.base, linkStyles.inactive)} activeStyle={linkStyles.active}>Icons</ButtonLink>
          <ButtonLink to={'/style_guide'} style={Object.assign({}, linkStyles.base, linkStyles.inactive)} activeStyle={linkStyles.active}>Style Guide</ButtonLink>
        </div>
      </div>
    );
  }
}
