import React from 'react';
import renderer from 'react-test-renderer';

import Countdown from 'Countdown';

describe('Countdown component', () => {

  function itRenders() {

  }
  it('renders correctly', () => {
    const tree = renderer.create(<Countdown onStartCountdown={itRenders} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});