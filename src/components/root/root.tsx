import * as React from 'react';
import { Component } from 'react';

import Btn from 'components/btn';

export default class Root extends Component<{}, {}> {
  public render() {
    return (
      <Btn onClick={this.foo}>Hello!</Btn>
    );
  }

  private foo() {
    const { addEventListener, ...rest } = window;

    // tslint:disable-next-line:no-console
    console.log(Object.keys(rest));
  }
}
