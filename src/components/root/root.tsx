import * as React from 'react';
import { Component } from 'react';

import Btn from 'components/btn';

interface RootProps {}
interface RootState {}

export default class Root extends Component<RootProps, RootState> {
  foo() {
    const { addEventListener, ...rest } = window;

    console.log(Object.keys(rest));
  }

  render() {
    return (
      <Btn onClick={this.foo}>Hello!</Btn>
    );
  }
}

