import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Root from '.';

it('Renders root', () => {
  const component = renderer.create(
    <Root />,
  );

  expect(component).toMatchSnapshot();
});
