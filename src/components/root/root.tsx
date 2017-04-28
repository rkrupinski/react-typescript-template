import React, { Component } from 'react';

import { Btn } from 'components/btn';

export class Root extends Component<{}, {}> {
  public render() {
    return (
      <Btn onClick={this.foo}>Hello!</Btn>
    );
  }

  public async componentDidMount() {
    const [foo, bar] = await Promise.all([
      Promise.resolve('foo'),
      Promise.resolve('bar'),
    ]);

    // tslint:disable-next-line:no-console
    console.log(foo, bar);
  }

  private foo() {
    const { addEventListener, ...rest } = window;

    // tslint:disable-next-line:no-console
    console.log(Object.keys(rest));
  }
}
