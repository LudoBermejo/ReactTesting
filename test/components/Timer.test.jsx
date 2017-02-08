import React from 'react';
import renderer from 'react-test-renderer';

import Main from 'Timer';

describe('Timer component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Timer />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});