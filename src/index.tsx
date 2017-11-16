import React from 'react';
import ReactDOM from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { normalize } from 'polished';
import { injectGlobal } from 'styled-components';

import Root from '@src/components/root';

injectGlobal`${normalize() as any}`; // tslint:disable-line

render(Root);

if (module.hot) {
  module.hot.accept('@src/components/root', () => {
    render(Root);
  });
}

function render(RootComponent: React.ComponentClass) {
  ReactDOM.render(
    (
      <AppContainer>
        <RootComponent />
      </AppContainer>
    ),
    document.querySelector('#app'),
  );
}
