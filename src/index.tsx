import React from 'react';
import ReactDOM from 'react-dom';
import styles from 'normalize.css';
import { AppContainer } from 'react-hot-loader';

import { Root } from './components/root';

styles.use();

render(Root);

if (module.hot) {
  module.hot.accept('./components/root', () => {
    render(Root);
  });
}

function render(RootComponent: typeof Root): void {
  ReactDOM.render(
    (
      <AppContainer>
        <RootComponent />
      </AppContainer>
    ),
    document.querySelector('#app'),
  );
}
