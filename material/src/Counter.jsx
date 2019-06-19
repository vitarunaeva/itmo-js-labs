import React, { Component as C } from 'react';

class Counter extends C {
  render() {
    return <Stars length={this.props.stars} />;
  }
}

const Stars = ({ length }) =>
  <span>{Array.from({ length }, (v, i) => ++i).map(() => '⭐️').join('')}</span>;

export default Counter;
