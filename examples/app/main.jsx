import React from 'react';
import ReactDOM from 'react-dom';
import Kitchensink from 'kitchensink';

import components from './components.js';
import icons from './icons.js';
import styles from './../styles';

if (module.hot) {
  module.hot.accept();
}

ReactDOM.render(React.createElement(Kitchensink, { components, icons, styles }), document.getElementById('root'));
