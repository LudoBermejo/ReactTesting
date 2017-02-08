import React from 'react';
import renderer from 'react-test-renderer';
import TestUtils from 'react-addons-test-utils';

import Clock from 'Clock';

describe('Clock component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Clock />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('renderTime', () => {
    let clock;
    beforeEach(() => {
      clock = TestUtils.renderIntoDocument(<Clock />);
    });

    it('returns false if empty string is sent', () => {
      expect(clock.formatSeconds('')).toBeFalsy();
    });

    it('returns false if string is sent', () => {
      expect(clock.formatSeconds('demo')).toBeFalsy();
    });

    it('returns false if array is sent', () => {
      expect(clock.formatSeconds([])).toBeFalsy();
    });

    it('returns valid data if less that 10 seconds is sent', () => {
      expect(clock.formatSeconds(9)).toBe('00:09');
    })

    it('returns valid data if less that 60 seconds is sent', () => {
      expect(clock.formatSeconds(50)).toBe('00:50');
    })

    it('returns valid data if more that 60 seconds is sent', () => {
      expect(clock.formatSeconds(140)).toBe('02:20');
    })

  });
});
