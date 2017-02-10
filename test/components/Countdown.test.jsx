import React from 'react';
import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import Countdown from 'Countdown';

describe('Countdown component', () => {

  function itRenders() {

  }
  it('renders correctly', () => {
    const tree = renderer.create(<Countdown onStartCountdown={() => {}} />).toJSON();

    expect(tree).toMatchSnapshot();
  });
});