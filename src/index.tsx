import * as React from 'react';
import { render } from 'react-dom';
import * as styles from 'normalize.css';

import './declarations';
import Root from './components/root';

styles.use();

render(
  <Root />,
  document.querySelector('#app'),
);
