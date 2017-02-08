import React from 'react';
import renderer from 'react-test-renderer';

import Countdown from 'Countdown';

describe('Countdown component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Countdown />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});