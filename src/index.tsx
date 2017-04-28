import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as styles from 'normalize.css';
import { AppContainer } from 'react-hot-loader';

import './declarations';
import Root from './components/root';

styles.use();

render(Root);

if (module.hot) {
  module.hot.accept('./components/root', () => {
    render(Root);
  });
}

function render(RootComponent: React.ComponentClass<any>): void {
  ReactDOM.render(
    (
      <AppContainer>
        <RootComponent />
      </AppContainer>
    ),
    document.querySelector('#app'),
  );
}
