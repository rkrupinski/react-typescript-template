import * as React from 'react';
import * as renderer from 'react-test-renderer';

import Btn from '.';

it('Renders btn', function () {
  ['Lorem', 'Ipsum', '💩'].forEach((text) => {
    const component = renderer.create(
      <Btn>{text}</Btn>
    );

    expect(component).toMatchSnapshot();
  });
});
